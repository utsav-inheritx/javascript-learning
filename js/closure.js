function x() {
    var a = 10;
    function y() {
        console.log(a);
    }
    y();
}
x();


// function x(){
//     var a = 10;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// var z = x();
// console.log(z);
// z();