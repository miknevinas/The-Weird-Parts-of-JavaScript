function greet(whattosay) {
    return function(name) {
        console.log(whattosay + ' ' + name);
    }
}

var sayHi = greet('Hi'); //greet returns an anonymous function object that is set to sayHi
sayHi('Adam'); //invokes function that was returned

//The greet() no longer exists, but any functions or variables created inside of it still exist
//Any functions created in the greet() will still have a reference to the greet() function memory, even though it was popped off the execution stack
//The execution context has "closed in" it's outer variables, even though the execution contextfor those variables are gone
//The JS engine creates the closure, we just take advantage of it