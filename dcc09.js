// Get ASCII value of a character.
function getASCII(c) {
  return c.charCodeAt(0);
}

// ome new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!
function correctTail(bod, tail) {
  let sub = bod.substr(bod.length - tail.length);
  if (sub === tail) return true;
  else return false;
}

// Write a function that returns a string in which firstname is swapped with last name.
function nameShuffler(str) {
  return str.split(' ').reverse().join(' ');
}

// Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b. a is "close to" b if margin is higher than or equal to the difference between a and b.
function closeCompare(a, b, m) {
  if (Math.abs(a - b) <= m) return 0;
  if (a < b) return -1;
  if (a > b) return 1;
  if (a == b) return 0;
}

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b.
function arrayDiff(a, b) {
  return a.filter(function (x) {
    return b.indexOf(x) < 0;
  });
}

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
function createPhoneNumber(numbers) {
  return `(${numbers.join('').slice(0, 3)}) ${numbers
    .join('')
    .slice(3, 6)}-${numbers.join('').slice(6)}`;
}

// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
const binaryArrayToNumber = (arr) => {
  return parseInt(arr.join(''), 2);
};

// Write the function circleArea/CircleArea which takes in a Circle object and calculates the area of that circle.
function circleArea(circle) {
  return Math.PI * circle.radius ** 2;
}

// Write a function calculating circumference of a Circle.
function circleCircumference(circle) {
  return Math.PI * circle.radius * 2;
}

// Point objects have x, y attributes. Triangle objects have attributes a, b, c describing their corners, each of them is a Point.
// Write a function calculating area of a Triangle defined this way.
function triangleArea(triangle) {
  let xA = triangle.a.x;
  let yA = triangle.a.y;
  let xB = triangle.b.x;
  let yB = triangle.b.y;
  let xC = triangle.c.x;
  let yC = triangle.c.y;

  let area = xA * (yB - yC) + xB * (yC - yA) + xC * (yA - yB);

  return Math.abs(area / 2);
}

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
function spinWords(words) {
  const strArr = words.split(' ');
  return strArr
    .map((x) => (x.length >= 5 ? x.split('').reverse().join('') : x))
    .join(' ');
}

// Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime.
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

// Task: In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
function wave(str) {
  let wave = [];
  for (let i = 0; i < str.length; i++) {
    let char = str.split('');
    if (char[i] !== ' ') {
      char[i] = char[i].toUpperCase();
      wave.push(char.join(''));
    }
  }
  return wave;
}

// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
function findOdd(arr) {
  return arr.reduce((a, b) => a ^ b);
}

// Taking into account that an average crew member on board adds 1.5 units to the draft, a ship that has a draft of more than 20 without crew is considered worthy to loot. Any ship weighing that much must have a lot of booty!
// Add the method `isWorthIt` to decide if the ship is worthy to loot.
class Ship {
  constructor(draft, crew) {
    this.draft = draft;
    this.crew = crew;
  }

  isWorthIt() {
    return this.draft - this.crew * 1.5 > 20;
  }
}
