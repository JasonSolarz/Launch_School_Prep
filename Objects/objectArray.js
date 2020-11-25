/* Use object literal syntax (e.g., { key: value, ... } notation) to create an object that behaves 
as an array in a for statement. The object should contain at least 3 elements. You should place your 
code between the braces in the let statement:*/

let MyArray = {
  0: "Element 0",
  1: "Element 1",
  2: "Element 2",
  length: 3
};

for (let lcv = 0; lcv < MyArray.length; lcv++) {
  console.log(MyArray[lcv]);
}