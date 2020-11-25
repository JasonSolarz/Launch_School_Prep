/*Write a program that uses a multiply function to multiply two numbers and returns the result. 
Ask the user to enter the two numbers, then output the numbers and result as a simple equation.*/

let multiply = (numberOne, numberTwo) => numberOne * numberTwo;

function askUserNumber(question) {
  let readline = require("readline-sync");
  let userInput = readline.question(question);
  return userInput;
}

let numberOne = askUserNumber("Enter the first number: ");
let numberTwo = askUserNumber("Enter the second number: ");

console.log(multiply(numberOne, numberTwo));