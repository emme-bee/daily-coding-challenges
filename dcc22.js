// Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.
function Dog(breed) {
  this.breed = breed;
}

var snoopy = new Dog('Beagle');

Dog.prototype.bark = function () {
  return 'Woof';
};

var scoobydoo = new Dog('Great Dane');

// Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.
function parseF(s) {
  if (Number.isNaN(parseFloat(s))) return null;
  else return Number.parseFloat(s);
}

// There is an array with some numbers. All numbers are equal except for one. Try to find it!
function findUniq(arr) {
  return +arr.filter((x) => {
    return arr.indexOf(x) == arr.lastIndexOf(x);
  });
}

// Task: Coding in function firstToLast, function accept 2 parameters:str and c. str is a string. c is a char.
// Please return the gap between the first position of c and the last position of c.
// If there are a lot of c in the str, should return a positive integer; If there is only one c in str, should return 0; If there is no c in the str, should return -1. Retrieval should not ignored the case.
function firstToLast(str, c) {
  return str.includes(c) ? str.lastIndexOf(c) - str.indexOf(c) : -1;
}

// Task: Coding in function blackAndWhite. function accept 1 parameter arr(a number array).
function blackAndWhite(arr) {
  return !Array.isArray(arr)
    ? "It's a fake array"
    : arr.includes(5) && arr.includes(13)
    ? "It's a black array"
    : "It's a white array";
}

// I've hit a few bugs in my Java/Type/Coffee-script code recently, and I've traced the problem back to the global isNaN function I was using. I had expected it to be more discerning, but it's returning true for undefined right now.
// Write a function isReallyNaN that returns true only if passed in an argument that evalutes to NaN, and returns false otherwise.

const isReallyNaN = (val) => {
  return Number.isNaN(val);
};
