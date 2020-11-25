/*Write a function that computes and returns the factorial (see exercise 4 in the Functions chapter) 
of a number by using a for loop. Use a loop of some kind to solve this; don't use recursion; we'll 
do that later.*/

function factorial(number) {
  if(number <= 1) {
    return 1;
  }

  return number * factorial(number - 1);
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));
console.log(factorial(8));