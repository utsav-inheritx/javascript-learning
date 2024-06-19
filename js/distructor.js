function calculate(a, b){
    let add = a + b;
    let sub = a - b;
    let mul = a * b;
    let div = a / b;

    return [add, sub, mul, div];
}

let [add, sub, mul, div] = calculate(10, 20);

console.log(add);
console.log(sub);
console.log(mul);
console.log(div);