import { Person } from './Person.js';

export class Employee extends Person {
    constructor(first, last, age, job) {
        super(first, last, age);
        this.jobtitle = job;
    }

    introduce() {
        console.log(`Hello I'm ${this.firstname} ${this.lastname}. I'm a ${this.jobtitle}`);
    }
}