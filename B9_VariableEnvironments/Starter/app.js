function b() {
    var myVar = 3; //fifth - new myVar is declared within scope of function b
    console.log(myVar);
}

function a() {
    var myVar = 2; //third - new myVar is declared within scope of function a
    console.log(myVar);
    b(); //fourth - b is invoked
}

var myVar = 1; //first - myVar is declared
console.log(myVar);
a(); //second - a is invoked
console.log(myVar);