import { doStart, doStop } from './auto.js';
import { Employee } from './creatiefMetKurk.js';

var start = document.getElementById("start");
var stop = document.getElementById("stop");

start.addEventListener("click", doStart);
stop.addEventListener("click", doStop);

var p1 = new Employee("Hans", 55, "Cook");
p1.Age = 44;

p1.intro();