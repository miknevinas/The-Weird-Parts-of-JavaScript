function b() {
    console.log('Called b!');
}

b(); //called

console.log(a); //undefined

var a = 'Hello World!';

console.log(a); //hello, world

/////////

function a() {
    console.log("a");
    b(); //runs second 
    var d = "d"; //runs fourth
    console.log(d);
}

function b() {
    console.log("b");
    var c = "c"; //runs third
    console.log(c);
}

a(); //runs first
var d; //runs last