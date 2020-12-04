export class Person {
    constructor(first, last, age) {
        this.firstname = first;
        this.lastname = last;
        this.age = age;
    }

    introduce() {
        console.log(`Hello ${this.firstname} ${this.lastname} (${this.age})`);
    }
}