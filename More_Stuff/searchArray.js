/*Write a function that searches an array of strings for every element that matches the 
regular expression given by its argument. The function should return all matching elements 
in an array.*/

let words = [
  "laboratory",
  "experiment",
  "flab",
  "Pans Labyrinth",
  "elaborate",
  "polar bear",
];

function allMatches(arr, search) {
  let matches = [];
  for(let lcv = 0; lcv < arr.length; lcv++) {
    if(search.test(arr[lcv])) {
      matches.push(arr[lcv]);
    }
  }

  return matches;
}

console.log(allMatches(words, /lab/));