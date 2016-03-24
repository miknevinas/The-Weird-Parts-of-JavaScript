var perso = new object();
var perso = {}; //object literal syntax, does the same as above
//The JS engine sees the curly braces and assumes that a new object is being created
//Allows for the object to be built within the braces
var Adam = {
    firstname:"adam", 
    lastname: "mcnevin",
    address: {
          street: "Autumn Ash",
          city: "Highlands Ranch",
          State: "CO"
        }
}  //The whole object is treated as one line of code

function greet(person) {
    console.log('Hi ' + person.firstname);
}

greet(Adam);

//objects can be created on the fly within a function call, same with lone strings, numbers, etc
greet({firstname: 'John', lastname: "Doe"}); 