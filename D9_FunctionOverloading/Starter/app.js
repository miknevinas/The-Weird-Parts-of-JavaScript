//function overloading - a function of the same name that has a different number of parameters
//This concept does not apply to JavaScript because functions are objects

function greet(firstname, lastname, language) {
    
    language = language || 'en';
    
    if (language === 'en') {
        console.log("Hello " + firstname + ' ' + lastname);
    }
    
    if (language === 'lt') {
        console.log("Sveikas " + firstname + ' ' + lastname);
    }
}

function greetEnglish(firstname, lastname) {
    greet(firstname, lastname, 'en');
}

function greetSpanish(firstname, lastname) {
    greet(firstname, lastname, 'lt');
}

greetEnglish("Adam", "McNevin");
greetLithuanian("Adam", "McNevin");