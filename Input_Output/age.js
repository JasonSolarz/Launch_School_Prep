/* Write a program named age.js that includes someone's age and then calculates and reports the 
future age in 10, 20, 30 and 40 years. Below is the output for someone 20 years old. */

let readLine = require("readline-sync");

let userAge = Number(readLine.question("How old are you? "));

console.log(`You are ${userAge} years old.`);
console.log(`In 10 years, you will be ${userAge + 10} years old.`);
console.log(`In 20 years, you will be ${userAge + 20} years old.`);
console.log(`In 30 years, you will be ${userAge + 30} years old.`);
console.log(`In 40 years, you will be ${userAge + 40} years old.`);