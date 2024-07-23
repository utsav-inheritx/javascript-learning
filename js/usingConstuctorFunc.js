function Person(firstName, lastName, age, isEmployed) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isEmployed = isEmployed;
    this.greet = function () {
        console.log("Hello, " + this.firstName + " " + this.lastName);
    };
}
let person = new Person("Mayank", "Parmar", 20, false);
person.greet();