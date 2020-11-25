/*In the exercises for the previous chapter, you wrote a dynamic greeter program named greeter.js. 
Add a function to this program that solicits the user's first and last names in separate invocations; 
the function should return the appropriate name as a string. Use the return values to greet the user 
with their full name.*/

function getUserInput(question) {
  let readline = require("readline-sync");
  let userInput = readline.question(question);
  return userInput;
}

let userFName = getUserInput("What is your first name? ");
let userLName = getUserInput("What is your last name? ");

console.log(`Hello, ${userFName} ${userLName}!`);