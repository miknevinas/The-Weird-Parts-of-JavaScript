// IIFE

(function(global, name) { //passing in the global objects allows for values to be pushed outside their scope
    
    var greeting = 'Hello';
    global.greeting = 'Hello';
    console.log(greeting + ' ' + name);
    
}(window, 'Adam')); // IIFE

console.log(greeting);






















