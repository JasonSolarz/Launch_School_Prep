let neg = -0;
let pos = 0;

function isNegative(value) {
  return 1 / value === -Infinity;
}

console.log(isNegative(neg));
console.log(isNegative(pos));
console.log(isNegative(1));

let y = "5";
console.log(++y);