let namet = {
    firstName: "Umang",
    lastName: "Sathvara",
}

let printFUllName = function(homeTown){
    console.log(this.firstName + " " + this.lastName + " from " + homeTown);
}

printFUllName.call(namet, "Jamnagar");

printFUllName.apply(namet, ["Jamnagar, Gujarat"]);


let printMyName = printFUllName.bind(namet, "Rajkot, Gujarat");
console.log(printMyName);
printMyName();          