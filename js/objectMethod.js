
// Object.keys(obj): Returns an array of a given object's property names.

// Object.values(obj): Returns an array of a given object's property values.

// Object.entries(obj): Returns an array of a given object's key-value pairs.

// Object.assign(target, ...sources): Copies the values of all enumerable properties from one or more source objects to a target object.



let person = {
    firstName: "Miss",
    lastName: "Universe",
    age: 30
};

console.log(Object.keys(person)); // ["firstName", "lastName", "age"]
console.log(Object.values(person)); // ["Miss", "Universe", 30]
console.log(Object.entries(person)); // [["firstName", "Miss"], ["lastName", "Universe"], ["age", 30]]

let additionalInfo = { isEmployed: true, nationality: "Indian" };
let updatedPerson = Object.assign({}, person, additionalInfo);
console.log(updatedPerson); // { firstName: "Miss", lastName: "Universe", age: 30, isEmployed: true, nationality: "Indian" }

