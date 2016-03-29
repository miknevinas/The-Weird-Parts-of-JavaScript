//Call, apply and bind are built-in methods on the function object

var person = {
    firstname: 'Adam',
    lastname: 'McNevin',
    getFullName: funtion() {
    var fullname = this.firstname + ' ' + this.lastname;
    return fullname;
    }
}


var logName = function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName()); //only has access to global scope, will not work without bind
}

var logPersonName = logName.bind(person); //"this" will now reference the person object

logPersonName();

logName.call(person, 'en', 'lt');
logName.apply(person, ['en', 'lt']);


//Function borrowing

var person2 = {
    fistname: 'Mike',
    lastname: 'McNevin'
}

console.log(person.getFullName.apply(person2)); //used method on person1 for person2 object

//Function currying

function multiply(a, b) {
    return a*b;
}

var multiplyByTwo = multiply.bind(this, 2); //saves first parameter as 2, can save multiple parameters by adding them after commas
multiplyByTwo(3); //passes in 3 for b parameter