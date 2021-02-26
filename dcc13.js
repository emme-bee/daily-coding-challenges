// Task: Your task is to complete the Cat class which Extends Animal, we want to go to use the original speak method as well, so you must use the super method so the speak method for Cat now returns e.g. 'Mr Whiskers makes a noise, Mr Whiskers goes meow.'
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return this.name + ' makes a noise, ';
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    return `${super.speak()}${this.name} goes meow.`;
  }
}

// Complete the function that accepts a date of birth (as a string) in the following format: "yyyy-mm-dd". The function shall return a one digit integer between 1 and 9 which represents the Life Path Number of the given date of birth.
function lifePathNumber(dateOfBirth) {
  let lifeNum = String(dateOfBirth.split('-').reduce((a, b) => a + +b, 0));
  let numNum = String(lifeNum.split('').reduce((a, b) => a + +b * 1, 0));
  let omg = String(numNum.split('').reduce((a, b) => a + +b, 0));
  return omg.split('').reduce((a, b) => a + +b, 0);
}

// Write a function iceBrickVolume that will except these parameters and return volume of ice brick that magician managed to put into a bottle.
function iceBrickVolume(radius, bottleLength, rimLength) {
  return 2 * radius * radius * (bottleLength - rimLength);
}

// Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is.
function whoIsPaying(name) {
  return name.length <= 2 ? [name] : [name, name.substring(0, 2)];
}

// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( length 0 ).
function solution(a, b) {
  return a.length < b.length ? a + b + a : b + a + b;
}

// Create a class Ball.
// Ball objects should accept one argument for "ball type" when instantiated.
// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."
class Ball {
  constructor(ballType) {
    this.ballType = ballType || 'regular';
  }
}

// another way to write it:
class Ball {
  constructor(ballType = 'regular') {
    this.ballType = ballType;
  }
}

// Give me the power to create a similar class like this: const Animal = makeClass("name","species","age","health","weight","color")
function makeClass(...properties) {
  return function (...args) {
    properties.forEach((p, i) => (this[p] = args[i]));
  };
}
