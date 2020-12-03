var a = document.getElementById("nrA");
var b = document.getElementById("nrB");
var ans = document.getElementById("answer");

document.getElementById("btnAdd")
    .addEventListener("click", async function (e) {
        let aa = parseInt(a.value);
        let bb = parseInt(b.value);

        //longAdd(aa, bb, function (res) {
        //    ans.textContent = res;
        //})

        //longAddAsync(aa, bb)
        //    .then((res) => ans.textContent = res, (err) => console.log(err));

        let result = await longAddAsync(aa, bb);
        ans.textContent = result;
                
    });

function longAdd(a, b, callback) {
    window.setTimeout(function () {
        let result = a + b;
        callback(result);
    }, 5000);
}
function longAddAsync(a, b) {
    let p = new Promise(function (callback, reject) {
        window.setTimeout(function () {
            let result = a + b;
            callback(result);
        }, 5000);
    });
    return p;
}