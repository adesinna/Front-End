// There are some variable you dont want to change

// We want to build a calculator that can calculater both the circumference and area of a circle.

const PI = 3.14; // this will make sure pi remains a constant through out
/*
let pi = 9;

 console.log(pi); this will be an error! since pi is a constant
*/
let radius = Number(window.prompt('Enter the radius:'));

let C = 2 * pi * radius;

let A = (radius ** 2) * pi;

console.log(`The area is ${A} and circumference is ${C}`);
