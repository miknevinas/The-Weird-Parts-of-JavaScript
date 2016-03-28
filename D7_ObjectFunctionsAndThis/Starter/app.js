console.log(this); //"this" is already available on a global scale, prints the window object

function a() {
    console.log(this);
    //in this execution context, "this" is still the window object
    this.newVar = 'yo'; //attaches new variable to global object
}

var b = function() {
    console.log(this);
    //also prinds window object
}

a();
console.log(newVar);//Prints 'yo'
b();

var c = {
    name: 'The c object',
    log: function() {
        
        this.name = "Updated c object"; //updates name property on the same object
        console.log(this);
        
        var setname = function(newName) {
            this.name = newName; //"this" here refers to the global object, not the c object (JS quirk)
        }
        setname("Update c object again"); //sets name on global object, not c object
        cosnole.log(this);
    }
}

c.log();// this is how you invoke a method


/////////To avoid accidentally hitting the global object, do this:
var d = {
    name: 'The c object',
    log: function() {

        var self = this;//eliminates ambiguity of scope
        
        self.name = "Updated c object";
        console.log(self);

        var setname = function(newName) {
            self.name = newName;
        }
        setname("Update c object again");
        cosnole.log(self); //now prints correct string
    }
}

d.log();