// if input = 1, "y", "yes" output = Continue...
// if input = 2, "n", "no" output = End...
let input;
input = 1;

switch (input) {
    case 1: //if (input === 1)
        document.write("Continue...");
        break;
    case "y":
        document.write("Continue...");
        break;
    case "yes":
        document.write("Continue...");
        break;
    case 0: //if (input === 0)
        document.write("End...");
        break;
    case "n":
        document.write("End...");
        break;
    case "no":
        document.write("End...");
        break;
    default:
        document.write("Wrong input");
}

// switch(input){
//     case 1: //if (input === 1)
//     case "y":
//     case "yes":
//         document.write("Continue...");
//         break;
//     case 0: //if (input === 0)
//     case "n":
//     case "no":
//         document.write("End...");
//         break;
//     default:
//         document.write("Wrong input");
// }