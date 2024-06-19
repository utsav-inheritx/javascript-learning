let task1 = {
    firstName: "Meet",
};

// 3 new keys added
task1.middleName = "Jayeshbhai";
task1.lastName = "Patel";
task1.userName = "meet_patel";

console.log(task1);



let task2 = {
    firstName: "Rahul",
    address: {
        city: "Ahmedabad",
        state: "Gujarat",
        country: "India"
    }
};

console.log(task2.address.city);

// Change city value
task2.address.city = "Rajkot";
console.log(task2.address.city);



let task4 = [[1, "Ajay", "Nikol"], [2, "Rahul", "Naroda"], [3, "Sanjay", "Odhav"]];
console.log(task4);

// Added new array value
task4.push([4, "Amit", "Maninagar"]);
console.log(task4);



let task5 = [{
    firstName: "Pranali",
    lastName: "Patel"
}];

// Add 3 new key in obj
task5[0].middleName = "Ravibhai";
task5[0].age = 22;
task5[0].location = "India";
console.log(task5);

// Add 4 new object in array
task5.push(
    {
        firstName: "Jay",
        lastName: "Shah",
        middleName: "Jayeshbhai",
        age: 25,
        location: "USA"
    },
    {
        firstName: "Jaysukh",
        lastName: "Parmar",
        middleName: "Bharatbhai",
        age: 30,
        location: "UK"
    },
    {
        firstName: "Jenny",
        lastName: "desai",
        middleName: "Chiragbhai",
        age: 35,
        location: "Canada"
    },
    {
        firstName: "Jeel",
        lastName: "Sonagara",
        middleName: "Dipakbhai",
        age: 28,
        location: "Australia"
    }
);
console.log(task5);