var vandaag = new Date(2010, 10, 30);
console.log(vandaag);

//var reg = new RegExp("\d*");
var reg = /\d*/;
console.log(reg.test("56"));

//var arr = new Array(10, 10);
var arr = [10, 10];
console.log(arr[0]);

var p1 = {
    "name": "Hans",
    "age": 42

};
//var p1 =new Object();
// p1.name = "Hans";
// p1.age = 42;

console.log(p1.name);