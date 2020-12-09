var person = {
    firstname : 'John',
    lastname : 'Doe',
    getFullName : function(){
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
}

var logName = function (){
    getFullName = function(){
        console.log("FULL NAME");
    }
    console.log('Logged: ' + this.getFullName());

}