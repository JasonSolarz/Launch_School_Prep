/*Write a function that computes and returns the factorial (see exercise 4 in the Functions chapter) 
of a number by using a for loop. Use a loop of some kind to solve this; don't use recursion; we'll 
do that later.*/

function factorial(number) {
  let sum = 1;
  for(let lcv = 1; lcv <= number; lcv++) {
    sum *= lcv;
  }
  return sum;
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));
console.log(factorial(8));