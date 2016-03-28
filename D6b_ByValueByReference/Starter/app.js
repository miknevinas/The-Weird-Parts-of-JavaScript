//by value (primitives)

var a = 3;
var b;

b = a; //a and b are copies of each other living in two separate spots in memory
//this allows eached to be changed independantly
a = 2;

console.log(a); //prints 2
console.log(b); //prints 3, because it was saved as an older copy of a


//by reference (objects, functions)

var c = { greeting: 'hi'};
var d;

d = c; //instead of being copied, d just points to c's value

c.greeting = "whatup"; //object is mutated

console.log(c); //prints "whatup"
console.log(d); //prints "whatup", because both noint to the same mutated object in memory

function changeGreeting(obj) {
    obj.greeting = "yo";
}

changeGreeting(d);

console.log(c); //prints "yo"
console.log(d); //prints "yo"