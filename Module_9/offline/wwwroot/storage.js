document.getElementById("btnCookie").addEventListener("click", storeCookie, false);
var txtCookie = document.getElementById("cookie");

function storeCookie() {
    var txt = document.getElementById("cookie").value;
    var exdate = new Date();
    exdate.setMinutes(exdate.getMinutes() + 1);
    document.cookie = "txt=" + txt + ";expires=" + exdate.toUTCString();
}
// Load cookies
var strArr = document.cookie.split(";");
if (strArr.length > 0) {
    txtCookie.value = strArr[0].split("=")[1];
}



// =================== Session Storage
document.getElementById("btnSession").addEventListener("click", storeSession, false);
var txtSession = document.getElementById("session");

function storeSession() {
    //sessionStorage.begin();

    sessionStorage.setItem("txt", txtSession.value);
    // or
    // sessionStorage["txt"] = txtSession.value;
    // or
    // sessionStorage.txt = txtSession.value;

    //sessionStorage.commit();

    //sessionStorage.removeItem("txt");
    //sessionStorage.clear();
}
// Load Session
txtSession.value = sessionStorage.getItem("txt");


// ================ Local Storage
document.getElementById("btnLocal").addEventListener("click", storeLocal, false);
var txtLocal = document.getElementById("local");
window.addEventListener("storage", storageCallback, false);

function storeLocal() {
    localStorage.setItem("txt", txtLocal.value);
    //localStorage.removeItem("txt");
    //localStorage.clear();
}
// General load functionality
function storageCallback(e) {
    alert("Key:" + e.key + " changed to " + e.newValue + ". Was " + e.oldValue);
}

txtLocal.value = localStorage.getItem("txt");


// ============== IndexDB
import { MyDB } from './indexdb.js';

document.getElementById("btnDB").addEventListener("click", saveData, false);
var txtLocal = document.getElementById("local");
var txtFName = document.getElementById("fname");
var txtLName = document.getElementById("lname");
var txtAge = document.getElementById("age");
var list = document.getElementById("list");

var myDB = new MyDB("MyDB");
myDB.init().then(() => {
    showData();
});


function saveData() {
    var pinfo = { FirstName: fname.value, LastName: lname.value, Age: age.value };
    myDB.storeData("people", pinfo);
    showData();
}
function showData() {
    myDB.getAllData("people").then(function (data) {
        var oldLi = list.children;
        while (oldLi.length > 0) {
            list.removeChild(oldLi[oldLi.length - 1]);
        }
        var xml = document.createDocumentFragment();
        var str = "";
        for (var i = 0; i < data.length; i++) {
            var li = document.createElement("li");
            xml.appendChild(li);
            var txt = document.createTextNode("First name: " + data[i].FirstName + ", Last name: " + data[i].LastName + ", Age: " + data[i].Age + "  ");
            li.appendChild(txt);
            var a = document.createElement("mark");
            a.appendChild(document.createTextNode("delete"));
            a.setAttribute("key", data[i].id);
            a.addEventListener("click", function () { myDB.deleteEntry("people", this.attributes["key"].value); showData() }, false);
            li.appendChild(a);
        }
        list.appendChild(xml);
    });
}