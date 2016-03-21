function greet(name) {
    console.log("Hello," + name);
}

greet(); //can be called without a parameter passed, prints "Hello, undefinded"

function greet(name) {
    name = name || '<your name here>';
    //if name is undefined, the || operator runs first and returns "<your name here>" as a default value to name
    console.log("hello," + name);
}

greet(); //prints "Hello, <your name here>"
greet("Adam"); //Prints "Hello, Adam"

//////////////////

console.log(libraryName); // Prints "Lib 2" because it was laded after the Lib 1 script on the html file