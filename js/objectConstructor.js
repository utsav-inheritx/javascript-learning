let person = new Object();

person.firstName = "Meet",
person.lastName = "Pambhar",
person.age = 25;
person.isEmployed = true;

person.greet = function(){
    console.log("Hello, " + this.lastName);
};

person.greet();