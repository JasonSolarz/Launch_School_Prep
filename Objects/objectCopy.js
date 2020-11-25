/*Create a function that creates and returns a copy of an object. The function should take 
two arguments: the object to copy and an array of the keys that you want to copy. Do not 
mutate the original object.

The function should let you omit the array of keys argument when calling the function. 
If you do omit the argument, the function should copy all of the existing keys from the object.*/

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let objKeys = Object.keys(objToCopy);

function copyObject(obj, keysList) {
  let objectCopy = {};

  if(keysList) {
    keysList.forEach(function(key) {
      objectCopy[key] = obj[key];
    });

    return objectCopy;
  }else {
    return Object.assign(objectCopy, obj);
  }
}

console.log(copyObject(objToCopy, objKeys));