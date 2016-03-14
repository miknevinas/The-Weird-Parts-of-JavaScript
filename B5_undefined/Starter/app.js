//logs value of a as "undefined"
var a;
console.log(a); //"undefined" is a built-in JS value which means the variable hasn't been set

if (a === undefined) {
    console.log("a is undefined");
}

else {
    consle.log('a is defined');
}



//throws "b" is not defined error
console.log(b);

if (b === undefined) {
    console.log("b is undefined");
}

else {
    consle.log('b is defined');
}