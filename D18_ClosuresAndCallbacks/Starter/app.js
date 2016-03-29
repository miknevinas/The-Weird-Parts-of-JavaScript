function sayHiLater() {
    var greeting = 'Hi';
    
    setTimeout(function() {
        console.log(greeting);
    }, 3000)
}


sayHiLater();


///callback

function tellMeWhenDone(callbackFunc) {
    var a = 1000;
    var b = 2000;
    
    callbackFunc(); //executes the function that was passed in as a parameter below
}

tellMeWhenDone(function() {
    alert("I am done");
})

tellMeWhenDone(function() {
    alert("All done");
})