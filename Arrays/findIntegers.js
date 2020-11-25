/*Write a findIntegers function that takes an array argument and returns an array that contains 
only the integers from the input array. Use the filter method in your function.*/

let things = [1, "a", "1", 3, NaN, 3.1415, -4, null, false];

function findIntegers(things) {
  let newThing = [];
  things.forEach(thing => {
    if(Number.isInteger(thing)){
      newThing.push(thing);
    }
  })
  return newThing;
}

let integers = findIntegers(things);

console.log(integers);

/*Book Solution

function findIntegers(array) {
  return array.filter(function(element) {
    return Number.isInteger(element);
  });
}
*/