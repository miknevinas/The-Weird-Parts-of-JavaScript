//functional programming allows for shorter and cleaner code

function mapForEach(arr, fn) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        )
    }
}

var arr1 = [1,2,3];
console.log(arr1);

var arr2 = mapForEach(arr1, function(item) {
    return item * 2; //2, 4, 6
})
console.log(arr2);

var arr3 = mapForEach(arr1, function(item) {
    return item > 2; //false, false, true
})
consle.log(arr3);


var checkPastLimit = function(limiter, item) {
    return item > limiter;
}
//checks if all values are greater than 1
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1)); //since mapForEach only accepts one regular parameter, we need to bind only parameter to pass through
console.log(arr4);



var checkPastLimitSimplified = function(limiter) {
    return function(limiter, item) {
        return item > limiter;   
    }.bind(this, limiter); 
};

var arr5 = mapForEach(arr1, checkPastLimitSimplified(1));
console.log(arr5);