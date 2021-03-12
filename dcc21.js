// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
function alphabetPosition(text) {
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  let nums = '';
  text = text.toLowerCase();

  for (let i = 0; i < text.length; i++) {
    let code = alpha.indexOf(text[i]);
    if (code > -1) nums += `${code + 1} `;
  }
  return nums.slice(0, nums.length - 1);
}

// Task Summary: In case you got lost, here's precisely what you have to do: define a method Number.prototype.times that accepts a function f as an argument and executes it as many times as the integer it is called on (e.g. (100).times would execute something 100 times). The iteration variable i should be supplied to the anonymous function being executed in order to support looping through array elements.
Number.prototype.times = function (f) {
  for (let i = 0; i < this; i++) {
    f(i);
  }
};

// You are given a program squaresOnly that accepts an array of natural numbers up to and including 100 (and including 0) of length >= 1, array, and returns a new array containing only square numbers that have appeared in the input array.
const squaresOnly = (arr) => arr.filter((x) => Math.sqrt(x) % 1 === 0);

// Output must be returned as a number data-type, greater than or equal to 0, with up to 4 decimal places. No error handling will be required.
// Using these parameters, create the function that will calculate Bob's and other partier's BAC.
function bloodAlcoholContent(drinks, weight, sex, time) {
  let count = 0;
  if (sex === 'male') count = 0.73;
  if (sex === 'female') count = 0.66;
  let bac =
    ((drinks.ounces * drinks.abv * 5.14) / weight) * count - 0.015 * time;

  return +bac.toFixed(4);
}

// Task: Coding in function cutCube. function accept 2 parameter: volume and n. volume is the volume of a cube. If we cut the cube into n block. please determine whether the length of the cube is an integer. return true or false.
function cutCube(volume, n) {
  return (
    Number.isInteger(Math.cbrt(n)) && Number.isInteger(Math.cbrt(volume / n))
  );
}

// ou task to pass only this tests :
// a == false
// !a == false
// a == !a
const a = '00';

// Our counter prototype is broken. Can you spot, what's wrong here?
class Counter {
  constructor() {
    this.value = 0;
  }

  getValue() {
    return this.value;
  }

  increase() {
    this.value++;
  }

  reset() {
    this.value = 0;
  }
}

// VVhat ?!?
// None of zese codevarriors seemz to remember hiz ovvn name !
// Kould you help ?
class Warrior {
  constructor(n, name) {
    name = n;
    this.name = function (n) {
      if (n) name = n;
      return name;
    };
  }

  toString() {
    return "Hi! my name's " + this.name();
  }
}

// Function should return a dictionary/Object/Hash with "status" as a key, whose value can : "busy" or "available" depending on the truth value of the argument is_busy.
// But as you will see after clicking RUN or ATTEMPT this code has several bugs, please fix them.
function getStatus(isBusy) {
  return { status: isBusy ? 'busy' : 'available' };
}

// Shouldn't the two functions getMax1 and getMax2 be equivalent and return the same value? Can you spot a problem and fix it? Can you learn something about JavaScript style in this kata?
function getMax1() {
  var max = {
    name: 'Max Headroom',
  };
  return max;
}

function getMax2() {
  return { name: 'Max Headroom' };
}

// We have implemented a function wrap(value) that takes a value of arbitrary type and wraps it in a new Javascript Object setting the 'value' key on the new Object to the passed-in value.

// This function should return an object, but it's not doing what's intended. What's wrong?
function mystery() {
  var results = { sanity: 'Hello' };

  return results;
}

// Functional closures can get overly attached. Set them straight!
// Why doesn't greet_abe() actually greet Abe?
let name = 'Abe';
let greet_abe = function () {
  return 'Hello, ' + name + '!';
};

let nam = 'Ben';
let greet_ben = function () {
  return 'Hello, ' + nam + '!';
};

// We have implemented a function wrap(value) that takes a value of arbitrary type and wraps it in a new Javascript Object setting the 'value' key on the new Object to the passed-in value.
function wrap(value) {
  return {
    value: value,
  };
}
