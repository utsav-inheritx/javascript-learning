let person = {
    firstName: "Mayur",
    lastName: "Patel",
    age: 25,
    isEmployed: true,

    greet: function(){
        console.log("Hello, " + this.firstName);
    }
};

person.greet();