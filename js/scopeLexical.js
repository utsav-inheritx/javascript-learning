function a() {
    var b = 10;
    console.log(b);
    c();
    function c() {
        console.log(b);
    }
}
a();
console.log(b);


// var a = 100;
// {
//     a = 1000;
//     var b = 30;
//     const c = 20;

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);

