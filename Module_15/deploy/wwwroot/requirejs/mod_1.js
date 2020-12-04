define('mod_1', ['require', 'exports'], function (require, exports) {
    
    return {
        Person: class Person {
            constructor(name, age) {
                this.name = name,
                    this.age = age
            }
            intro() {
                console.log(`Hello. I'm ${this.name} and ${this.age} years old`);
            }
        }
    }
});