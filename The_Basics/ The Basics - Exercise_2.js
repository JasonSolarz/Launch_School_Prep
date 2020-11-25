let number = 4936;
let thousands = 0;
let hundreds = 0;
let tens = 0;
let ones = 0;

console.log(number);

thousands = Math.floor(number / 1000);
number -= thousands * 1000;

hundreds = Math.floor(number / 100);
number -= hundreds * 100;

tens = Math.floor(number / 10);
number -= tens * 10;

ones = Math.floor(number / 1);

console.log(`1. Thousands place is ${thousands}\n2. Hundreds place is ${hundreds}\n3. Tens place is ${tens}\n4. Ones place is ${ones}`);