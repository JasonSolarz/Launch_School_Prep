/*Without using a for, while, or do/while loop, write some code that checks whether the 
number 3 appears inside these arrays:*/

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function findInteger(array, int) {
  return array.includes(int);
}

console.log(findInteger(numbers1, 3));
console.log(findInteger(numbers2, 3));
console.log(findInteger(numbers3, 3));