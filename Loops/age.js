/* Write a program named age.js that includes someone's age and then calculates and reports the 
future age in 10, 20, 30 and 40 years. Below is the output for someone 20 years old. */

let readLine = require("readline-sync");

let userAge = Number(readLine.question("How old are you? "));

console.log(`You are ${userAge} years old.`);

for(let lcv = 1; lcv < 5; lcv++) {
  let tenYears = 10;
  console.log(`In ${tenYears} years, you will be ${userAge + lcv * tenYears} years old.`);
}