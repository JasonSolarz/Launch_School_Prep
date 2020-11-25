/*Log all of the even values from myArray to the console.*/

console.log("---First Array---");

let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

myArray.forEach(num => {
  if(num % 2 === 0) {
    console.log(num);
  }
});

/*Let's make the problem a little harder. In this problem, we're again interested in even numbers, 
but this time the numbers are in nested arrays in a single outer array.*/

console.log("---Second Array---");

let myArrayTwo = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

for(let lcv = 0; lcv < myArrayTwo.length; lcv++){
  for(let lcv2 = 0; lcv2 < myArrayTwo[lcv].length; lcv2++) {
    if(myArrayTwo[lcv][lcv2] % 2 === 0){
      console.log(myArrayTwo[lcv][lcv2]);
    }
  }
}

console.log("---Third Array---");

let myArrayThree = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

let newArray = myArrayThree.map(num => {
  if(num % 2 === 0) {
    console.log("Even");
  }else {
    console.log("Odd");
  }
});