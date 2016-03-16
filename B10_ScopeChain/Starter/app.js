function b() { //lexically sitting in global environment
	console.log(myVar); //prints "1"
    //since there are no variables declared within this function, it will reference the outer environment for a variable with the same name
}

function a() {
	var myVar = 2;
	b();
}

var myVar = 1;
a();

/////////////

function a() {
    
    function b() { //function b cannot be found in creation phase due to not being lexically placed on global scope
        console.log(myVar); //prints "2"
        //the outer environment is now function a, not the global scope
    }
    
    var myVar = 2;
    b();
}

var myVar = 1;
a();