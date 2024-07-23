let personProto = {
    greet: function () {
        console.log("Hello, " + this.firstName);
    }
};

let person = Object.create(personProto);
person.firstName = "Dev";
person.lastName = "Gajjar";
person.age = 18;
person.isEmployed = true;

person.greet();