var greet = 'Hello!';
var greet = 'Hola!'; 

console.log(greet);

//Objects can be used create "fake namespaces"

var english = {};
var spanish = {};

english.greet = "Hello";
spanish.greet = "Hola";

console.log(english);

//Chained dot notation only works if the objects exist withing the objects
english.greetings.greet = "Hello"; //Doesn't work because no greetings object was defined withing the brackets