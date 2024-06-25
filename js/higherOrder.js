const radius = [3, 1, 2, 4];

const area = function(radius){
    return Math.PI * radius * radius;
};

const circumference = function(radius){
    return 2 * Math.PI * radius;
};

const diameter = function(radius){
    return 2 * radius;
};

const calcualate = function(radius, logic){
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output;
};

console.log(calcualate(radius, area));
console.log(calcualate(radius, circumference));
console.log(calcualate(radius, diameter));



// const calculateArea = function(radius){
//     const output = [];
//     for (let i = 0; i < radius.length; i++){
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// };
// console.log(calculateArea(radius));



// const calculateCircumference = function(radius){
//     const output = [];
//     for (let i = 0; i < radius.length; i++){
//         output.push(2 * Math.PI * radius[i]);
//     }
//     return output;
// };
// console.log(calculateCircumference(radius));



// const calculateDiameter = function(radius){
//     const output = [];
//     for (let i = 0; i < radius.length; i++){
//         output.push(2 * radius[i]);
//     }
//     return output;
// };
// console.log(calculateDiameter(radius));



const num = [0, 1, 2, 3, 4, 5];
function add(arr){
    for(let j=0; j<arr.length; j++){
        console.log(arr[j] + 1);
    }
}
add(num);