var po = {
    nr: 10
};

var p1 = Object.create(po, {
    name: {
        value: "Karin",
        writable: true
    },
    age: {
        value: 42,
        writable: false
    },
    intro: {
        value: function () {
            console.log(this.name + " " + this.age);
        },
        writable: false
    }
});

p1.nr = 40;
p1.intro();