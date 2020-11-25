/*Write a function, evenOrOdd, that determines whether its argument is an even number. If it is, 
the function should log 'even' to the console; otherwise, it should log 'odd'. For now, assume 
that the argument is always an integer.*/

function evenOrOdd(number) {
  if(Number.isInteger(number))
  {
    if(number % 2 === 0) {
      console.log("Even");
    }
    else {
      console.log("Odd");
    }
  } else {
    console.log("Error: NaN");
  }
}

evenOrOdd(5);
evenOrOdd(6);
evenOrOdd(7);
evenOrOdd("Hi");