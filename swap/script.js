//Swap two variables without using the third one

let a = 10;
let b = 3;

a = a + b;
b = a - b;
a = a - b;

console.log(a);
console.log(b);