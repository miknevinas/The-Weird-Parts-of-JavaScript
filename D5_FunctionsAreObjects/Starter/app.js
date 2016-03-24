function greet() {
    console.log("Hi");
}

//Properties can be added to functions just like any other object
greet.language = 'english';
console.log(greet); //Prints actual code of function
console.log(greet.language); //Prints 'english'

//Name property = greet
//Code property = console.log('Hi');