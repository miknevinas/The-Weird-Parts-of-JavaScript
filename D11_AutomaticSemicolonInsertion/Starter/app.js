//Automatic semicolon insertion is harmful

function getPerson() {
    return //the compiler automatically inserts a semicolon here, rendering the next lines moot
    {
        firstname: "Adam"
    }
}

console.log(getPerson());//prints undefined

//proper syntax
function getPerson() {
    return {
        firstname: "Adam"
    }
}
console.log(getPerson());//prints {firstname: Adam}