let name = {
    firstName: "Umang",
    lastName: "Sathvara",
}

let printFUllName = function(homeTown){
    console.log(this.firstName + " " + this.lastName + " from " + homeTown);
}

printFUllName.call(name, "Jamnagar");

printFUllName.apply(name, ["Jamnagar, Gujarat"]);


let printMyName = printFUllName.bind(name, "Rajkot, Gujarat");
console.log(printMyName);
printMyName();