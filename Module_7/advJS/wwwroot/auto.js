// IIFE
//var MYNS = {};

//(function () {
//    var counter = 0;


//    var interval;

//    function doStart() {
//        interval = window.setInterval(() => {
//            h1.textContent = ++counter;
//        }, 1000)
//    }

//    function doStop() {
//        window.clearInterval(interval);
//        counter = 0;
//    } 

//    MYNS.start = doStart;
//    MYNS.stop = doStop;
//})();

var counter = 0;
var interval;
var h1 = document.getElementById("nr");

export function doStart() {
    interval = window.setInterval(() => {
        h1.textContent = ++counter;
    }, 1000)
}

export function doStop() {
    window.clearInterval(interval);
    counter = 0;
}




