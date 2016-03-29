function buildFunctions() {
    var arr = [];
    
    for (var i = 0; i < 3; i++) {
        arr.push(
            function() { //function object is only created here, not invoked
                console.log(i);
            }
        )
    }
    return arr;
}

var functions = buildFunctions();
//anonymous function is called here using outer reference
functions[0](); //all print 3 because they all reference buildFunctions
functions[1](); //each function will not say on what iteration they were created, only the latest iteration that is currently in memory
functions[2]();


///////////////////////////
function buildFunctions2() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(
            //immediately invoking the functions as they're created allows for the proper index to be printed for each call
            (function(j) { //j preserves the value of i
                return function() {
                    console.log(j);
                }
            }(i)) //the index is passed into the anonymous function and printed as each parent function is added to the array
        )
    }
    return arr;
}

var functions2 = buildFunctions2();

functions2[0](); 
functions2[1](); 
functions2[2]();

