function isNotANumber(value) {
  return value !== value;
}

console.log(isNotANumber(5));
console.log(isNotANumber("Hi"));