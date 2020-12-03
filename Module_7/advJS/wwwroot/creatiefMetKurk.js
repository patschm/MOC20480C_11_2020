function XPerson(name, age) {
    this.name = name;
    this.age = age;
}

XPerson.prototype.intro = function () {
    console.log(this.name + " " + this.age);
}

function XEmployee(name, age, job) {
    XPerson.prototype.constructor.apply(this, [name, age]);
    this.job = job;
}

// Prototype chaining
XEmployee.prototype = new XPerson();
XEmployee.prototype.constructor = XEmployee;

XEmployee.prototype.intro = function () {
    console.log(this.name + " " + this.age + " " + this.job);
}

export class Person {
    constructor(name, age) {
        this.name = name;
        this.Age = age;
    }

    get Age() {
        return this.age;
    }
    set Age(nAge) {
        if (nAge >= 0 && nAge < 124) {
            this.age = nAge;
        }
    }

    intro = function () {
        console.log(this.name + " " + this.Age);
    }
}

export class Employee extends Person {
    constructor(name, age, job) {
        super(name, age);
        this.job = job;
    }
    intro = function () {
        console.log(this.name + " " + this.Age + " " + this.job);
    }
}


var p1 = new Employee("Marie", 55, "Cook");
p1.Age = 44;

p1.intro();