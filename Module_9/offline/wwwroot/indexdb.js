export class MyDB {
    constructor(name) {
        this.name = name;
        this.db = null;
    }

    init() {
        return new Promise((resolve, error) => {
            if (this.db == null) {
                // first arg = database name, second = version
                // open works ASYNCHRONOUS!!!
                var openRequest = indexedDB.open(this.name, 2)
                openRequest.onupgradeneeded = function (e) {
                    // called when version changes. Use versions for modified table layouts
                    e.currentTarget.result.createObjectStore("people", { keyPath: "id", autoIncrement: true });
                }
                openRequest.onsuccess =  (e) => {
                    this.db = e.target.result;
                    resolve();
                };
                openRequest.onerror = (e) => {
                    error();
                };
            }
        });
    }

    storeData(table, data) {
        return new Promise((resolve, reject) => {
            var tran = this.db.transaction(table, "readwrite");
            var store = tran.objectStore(table);

            // put() will update an existing record. If none exists it a new will be created
            // add() will only insert
            var addRequest = store.add(data);
            addRequest.onsuccess = function (e) {
                resolve();
            };
            addRequest.onerror = function (e) { reject(e) };
        });
    }
    getAllData(table) {
        return new Promise((resolve, reject) => {
            var tran = this.db.transaction(table, "readonly");
            var store = tran.objectStore(table);
            var cursor = store.openCursor(IDBKeyRange.lowerBound(0));
            //var cursor = store.openCursor("select * from person where id>0");
            var returnData = [];
            cursor.onsuccess = function (e) {
                if (!e.target.result) {
                    resolve(returnData);
                    return;
                }
                returnData.push(e.target.result.value);
                e.target.result.continue();
            }
            cursor.onerror = function (e) {
                reject(e.message);
            }
        });
    }
    deleteEntry(table, key) {
        var intKey = parseInt(key);
        var tran = this.db.transaction(table, "readwrite");
        var store = tran.objectStore(table);
        var cmdGet = store.get(intKey)
        cmdGet.onsuccess = function (e) {
            var del = confirm(e.target.result.LastName + " will be deleted");
            if (del) {
                var cmd = store.delete(intKey);
                cmd.onsuccess = function (e) {
                    alert("index " + key + " is deleted");
                }
                cmd.onerror = function (e) {
                    alert(e.message);
                }
            }
        }
    }
}
    