
let person = {
    firstName: "Inheritx",
    lastName: "Solutions"
};

person.age = 25;

console.log(person);
console.log(person['firstName']);

person.firstName = "IT"

console.log(person.firstName);
console.log(person.lastName);

delete person.lastName;
console.log(person);


// Properties
for(let key in person){
    console.log(key);
}

for(let key in person){
    console.log(key + ": " + person[key]);
}


// Methods
person.sayHello = function(){
    console.log("Hello !");
}
person.sayHello();
      

function greet(){
    console.log("Inside Array");
}
person.sayHello1 = greet;
person.sayHello1();     


