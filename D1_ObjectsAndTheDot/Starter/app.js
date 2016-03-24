//Brackets operator: The hard, lesser-used operator for accessing properties of methods
var person = new Object();

person["firstname"] = "Adam"; //Computed member access operator, looks for property within the brackets on the object
person["lastname"] = "McNevin";

var firstNameProperty = "firstname";

console.log(person[firstNameProperty])

//Dot operator: The easier operator
console.log(person.firstname); //Member access operator, higher precedence than []
console.log(person.lastname);

person.address = new Object();
person.address.street = "1357 Autumn Pl"; //looks at person object for address property, then looks for street property on that object
person.address.city = "Highlands Ranch";
person.address.state = "CO";

console.log(person.address.city);