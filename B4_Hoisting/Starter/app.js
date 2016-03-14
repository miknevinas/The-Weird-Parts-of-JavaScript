b();
console.log(a); //gives undefined, but does not throw error. 

var a = 'Hello World!'; //All variables in JS are initially set to undefined

function b() {
    console.log('Called b');
}


//Best practice//
var a = 'Hello World!';

function b() {
    console.log('Called b');
}

b();
console.log(a); 