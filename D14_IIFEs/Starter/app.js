//function statement
function greet(name) {
    console.log('hello ' + name);
}
greet('Adam');

//function expression
var greetFunc = function(name) {
    console.log('hello ' + name);
}
greetFunc('Adam');
console.log(greetFunc); //prints the syntax of the function

//Immediately invoked function expression
var greeting = function(name) {
    console.log('hello ' + name);
}('Adam'); //runs immediately after being created and sets result equal to the variable declaration
console.log(greeting);//prints a string because the function was already invoked


//wrapping an anonymous function in parentheses tricks the parser into thinking it is a function expression
(function(name) {
    var greeting = 'Hello';
    console.log(greeting + ' ' + name + ' from the IIFE');
}('Adam')); //classic example of IIFE

(function(name) {
    var greeting = 'Hello';
    console.log(greeting + ' ' + name + ' from the IIFE');
})('Adam'); //can also be invoked on the outside