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


/////////////////
function foo() {
    var count = 0;
    return function() {
        count += 1;
        console.log('This function has been called ' + count + ' times.')
    }
}
var bar = foo(); //saves anonymous function that was returned to variable 
bar();           //invokes anonymous function that was returned

//The function created in foo() will still have a reference to the foo() execution context space, even though foo() was cleaned during garbage collection