var isCapture = true;
var h1 = document.getElementById("h1");
h1.addEventListener("click", function (e) {
    console.log("H1 CurrentTarget: " + e.currentTarget.id);
    console.log("H1 Target: " + e.target.nodeName);
}, isCapture);


var div1 = document.getElementById("div1");
div1.addEventListener("click", function (e) {
    console.log("DIV1 CurrentTarget: " + e.currentTarget.id);
    console.log("DIV1 Target: " + e.target.nodeName);
}, isCapture);

var div2 = document.getElementById("div2");
div2.addEventListener("click", function (e) {
    console.log("DIV2 CurrentTarget: " + e.currentTarget.id);
    console.log("DIV2 Target: " + e.target.nodeName);
}, isCapture);





var se = document.getElementById("ha1");
var se = document.querySelector(".test");


se.textContent = "Hahaha. Leuk dat DOM";
se.style.backgroundColor = "red";

var mijnh1 = document.createElement("h1");
var txt = document.createTextNode("Hahaha");
mijnh1.appendChild(txt);
//mijnh1.textContent = "Dit is mijn element";
document.body.insertBefore(mijnh1, document.body.firstChild);

console.log(se.nodeName);
console.log( document.forms.myform.age.type)