// if else if
let age = 18;
let hasVoterCard = "No";

if(age>=18 && hasVoterCard == "Yes"){
   console.log("You are eligible for Voter Id") 
} else if(age>=18 && hasVoterCard != "Yes"){
    console.log("Get ur Voter Id")
} else{
    console.log("Your are not eligible for Voter Id");
}


// Nested if
let age1 = 18;
let hasVoterId = "No";

if(age1>=18){
    if(hasVoterId == "Yes"){
        console.log("Go for Vote")
    } else{
        console.log("Create Voter Id")
    }
    console.log("You can Vote");
} else{
    console.log("You can't Vote");
}


// Ternary Operator
let isLoggedin = 0; // if o logout || if 1 login


// if(isLoggedin == 0){
//     document.write("Login");
// } else{
//     document.write("Logout");
// }

// let option = isLoggedin == 1 ? "Logout" : "Login";
// document.write(option); 


// Nulish Polishing Operator
// let user;
// user = "Inheritx";
// alert(user ?? "Guest User");


// if input = 1, "y", "yes" output = Continue...
// if input = 2, "n", "no" output = End...
let input;
input = "";

if(input === 1){
    document.write("Continue");
} else if(input === "y"){
    document.write("Continue");
} else if(input === "yes"){
    document.write("Continue");
} else if(input === 0){
    document.write("End");
} else if(input === "n"){
    document.write("End");
} else if(input === "no"){
    document.write("End");
} else {
    document.write("Wrong input");
}