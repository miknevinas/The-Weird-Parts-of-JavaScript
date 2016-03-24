//JSON - JavaScript Object Notation

var objectLiteral = {
    firstname: "adam",
    isAProgrammer: true
}

console.log(objectLiteral);

//JSON is a subset of the object literal syntax
{
    "firstname": "John",
    "isAProgrammer": true
}
//All JSON syntax is valid object literal syntax, but not vice versa

console.log(JSON.stringify(objectLiteral)); //Converts object to a string

var jsonValue = JSON.parse('{"firstname": "John", "isAProgrammer": true}'); //Converts string into an object
