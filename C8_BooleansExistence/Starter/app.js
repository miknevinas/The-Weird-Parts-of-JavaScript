var a;

if (a) { //"if" statment parenthesis try to coerce the value within to a boolean
    console.log('true');
}
//coercion can be used to check is a variable has a value

if (a || a === 0) { 
    console.log(true);
}
if (a || true) { //a === 0 is true
    console.log(true);
}
if (false || true) { //a is false because it was declared empty
    console.log(true);
}