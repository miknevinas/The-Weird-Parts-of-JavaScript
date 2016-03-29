function makeGreeting(language) {
    
    return function(firstname, lastname) {
        if (language === 'en') {
            console.log('Hello ' + firstname + ' ' + lastname);
        }
        if (language === 'lt') {
            console.log('Sveikas ' + firstname + ' ' + lastname);
        }
    }
}

//each is given their own execution context in memory
var greetEnglish = makeGreeting('en'); //closure points to 'en' in memory
var greetLithuanian = makeGreeting('lt'); //closure points to 'lt' in memory
greetEnglish('Adam', 'McNevin');
greetLithuanian('Adomai', 'Miknevinai');

//closure allows for default parameters to be used repeatedly, not having to repeat them in the code