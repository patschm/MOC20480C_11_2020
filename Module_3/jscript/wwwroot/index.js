//name = "Jan";
var age = 1;
//let lastname = "Hermsen";
const pi = 3.14;

// Operatoren
//age += 20;
//age++;

var ok = age >= 18 && age < 67;
console.log(ok);

// 1 of meer uitgevoerd
do
{
    age++;
}
while(age < 10)

// 0 of meer keer uitgevoerd
while (age < 10) {
    age++;
}

for (let x = 0; x < 10; x += 2) {
    console.log(x);
}

switch (age) {
    case 1:
        console.log("Een");
        break;
    case 2:
        console.log("Twee");
        break;
    case 3:
        console.log("Drie");
        break;
    default:
        console.log("Anders");
        break;
}

if (age > 50) {
    console.log("Ouder dan 50");
}
else {
   
}


function saySomething(arg1, blah1)
{
    {
        let age = 64;
    }
    console.log(blah1);
    //console.log(age);

    function subFun()
    {
       let age = 123;
        console.log(age);
    }

    return subFun;
}

var fn = saySomething(42, "ha");
//fn();

console.log("Global: " + age);