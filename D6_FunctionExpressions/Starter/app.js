var a;

console.log(1 + 2); //1 + 2 in the console is an expression because it returns a value (3)

a = {greeting: 'hi'};


if (a === 3) { 
    //The expression is within the parentheses, while the if statement just does the work so the expression can produce a value
}

greet();

function greet() {  //This unit of code is hoisted but does not produce a value
    console.log('hi');
}


//Function expression
var anonymousGreet = function() { //creates a function object and setting it equal to anonymousGreet
    console.log('hi');
}

anonymousGreet();
//The function technically does not have a name, but it doesn't need one because it ives on the anonymousGreet variable
//The function in this case IS an expression because it results in an object being created - it is made durng the execution phase, whereas the other format is created during the hoisting phase


function log(a) {
    console.log(a);
}

log(function() {  //a function can be created on the fly and passed as a parameter using a function expression
    console.log('hi');
});