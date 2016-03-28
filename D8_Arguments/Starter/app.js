function greet(firstName, lastName, language) {
    
    console.log(firstName);
    console.log(lastName);
    console.log(language);
    console.log(arguments);//prints [] ***Not an actual javascript array
}

greet();// unlike other languages, this can be called with no parameters and not throw an error
greet('Adam');//prints Adam, undefined, undefined, ["Adam"]
greet('Adam', 'McNevin', 'en'); //Prints Adam, McNevin, en, ["Adam", "McNevin", "en"]