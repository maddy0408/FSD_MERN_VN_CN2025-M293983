let a = parseInt(prompt("Enter A salary:"));
let b = parseInt(prompt("Enter B salary:"));

let res = a > b ? `A earns more by ₹${a - b}`: `B earns more by ₹${b - a}`;

console.log(res);