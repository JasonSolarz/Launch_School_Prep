let readline = require("readline-sync");

let userFName = readline.question("What is your first name? ");
let userLName = readline.question("What is your last name? ");

console.log(`Hello, ${userFName} ${userLName}!`);