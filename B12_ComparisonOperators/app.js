//1
console.log(1 <2 < 3) //True

//2
console.log(3 < 2 < 1)//True -- operator associativity 
console.log((0) < 1)//left-to-right makes 3 < 2 false, false is coerced to 0, therfeore 0 < 1 = true

//3
// == equality will coerce values on either side
console.log("3" == 3)//True
var a = false;
console.log(a == 0)//True

//4
// === strict equality compares two thing sbut doesn't try to coerce the values
console.log("3" === 3)//false

var b = 0;
var c = false;

if (a == b) {
    console.log("b & c are equal")
} else {
    console.log("not equal")
}
//logs equal

var b = 0;
var c = false;

if (a === b) {
    console.log("b & c are equal")
} else {
    console.log("not equal")
}
//logs not equal