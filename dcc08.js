// In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:
function Hero(name) {
  this.name = name || 'Hero';
  this.position = '00';
  this.health = 100;
  this.damage = 5;
  this.experience = 0;
}

// You are running the calculation 2 + 2 * 2 + 2 * 2 and expect to get the answer 32 but instead the function keeps returning 10. Fix the function to make it return 32 without changing the number or the operators.
function orderOperations() {
  return (2 + 2) * (2 + 2) * 2;
}
// You are creating a text-based terminal version of your favorite board game. In the board game, each turn has six steps that must happen in this order: roll the dice, move, combat, get coins, buy more health, and print status.
function doTurn() {
  rollDice();
  move();
  combat();
  getCoins();
  buyHealth();
  printStatus();
}

// While making a zork-type game, you create an object of rooms. Unfortunately, the game is not working. Find all of the errors in the rooms object to get your game working again.
var rooms = {
  first: {
    description: 'This is the first room',
    items: {
      chair: 'The old chair looks comfortable',
      lamp: 'This lamp looks ancient',
    },
  },
  second: {
    description: 'This is the second room',
    items: {
      couch: 'This couch looks like it would hurt your back',
      table: 'On the table there is an unopened bottle of water',
    },
  },
};

// Find Mean: Find the mean (average) of a list of numbers in an array.
// Information: To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.
var findAverage = function (nums) {
  return nums.reduce((a, b) => a + b) / nums.length;
};

// Write a function greaterThanLessThan that takes three arguments, a, b, and c, and returns a boolean (true or false)
function greaterThanLessThan(a, b, c) {
  return a < b < c;
}

// Task: Coding in function howManySmaller, function accept 2 parameter:arr and n. arr is a decimal array. n is a decimal.
// The first mission: let all elements in the array keep two decimal places(No need to convert number n).
// The second mission: Traversal arr, count the number of the element which smaller than n and return it.
function howManySmaller(arr, n) {
  return arr.map((x) => x.toFixed(2)).filter((x) => x < n).length;
}

// Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.
function add(a, b) {
  return +a == +b;
}

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
function solution(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
  }
  return sum;
}

// Task: Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else, if val value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".
// When you have finished the work, click "Run Tests" to see if your code is working properly.
// In the end, click "Submit" to submit your code pass this kata.
function trueOrFalse(val) {
  return val ? 'true' : 'false';
}

// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2);
}

// What we want to implement is Array.prototype.filter() function, just like the existing Array.prototype.filter().
Array.prototype.filter = function (func) {
  let filtered = [];
  for (let i = 0; i < this.length; i++) {
    if (func(this[i])) filtered.push(this[i]);
  }
  return filtered;
};

//
const yourFutureCareer = (career = Math.random()) =>
  career <= 0.32
    ? `FrontEnd Developer`
    : career <= 0.65
    ? `BackEnd Developer`
    : 'Full-Stack Developer';

// I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.
const swapValues = (arr) => {
  let temp = arr[0];
  arr[0] = arr[1];
  arr[1] = temp;
};

// In this kata, we will make a function to test whether a period is late.
function periodIsLate(last, today, cycleLength) {
  return Math.floor((today - last) / 86400000) > cycleLength;
}

// Task: Your task is simple, search the password string for any injected code (Injected code is any thing that would be used to exploit flaws in the current code, so basically anything that contains || or //) if you find any you must return "Wrong username or password!" because no one likes someone trying to cheat their way in!
function validate(username, password) {
  var database = new Database();
  if (password.includes('||') || password.includes('//')) {
    return 'Wrong username or password!';
  } else {
    return database.login(username, password);
  }
}

// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
function expressionMatter(a, b, c) {
  return Math.max(
    a + b + c,
    a * b * c,
    (a + b) * c,
    a + b * c,
    a * b + c,
    a * (b + c)
  );
}

//
function points(games) {
  return games
    .map((x) => x.split(':'))
    .map((x) => (x[0] > x[1] ? 3 : x[0] === x[1] ? 1 : 0))
    .reduce((a, b) => a + b);
}

// Task: Given a list of numbers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).
function oddOrEven(array) {
  return array.reduce((a, b) => a + b, 0) % 2 === 0 ? 'even' : 'odd';
}

// Task: Coding in function pickIt, function accept 1 parameter:arr, it's a number array, we need traverse arr by using for loop, if element is odd number, push it to array odd, if it's a even number, push it to array even.
function pickIt(arr) {
  let odd = [],
    even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) even.push(arr[i]);
    else odd.push(arr[i]);
  }
  return [odd, even];
}

// In this Kata, you will remove the left-most duplicates from a list of integers and return the result.
function solve(arr) {
  return [...new Set(arr.reverse())].reverse();
}

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
function descendingOrder(n) {
  let num = String(n).split('').sort().reverse().join('');
  return Number(num);
}

// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
function lovefunc(flower1, flower2) {
  if (
    (flower1 % 2 === 0 && flower2 % 2 === 0) ||
    (flower1 % 2 !== 0 && flower2 % 2 !== 0)
  ) {
    return false;
  }
  return true;
}

// Task: Coding in function colorOf. function accept 3 parameter:r g b. It means value of color red green and blue. the value range is 0-255.
// Use toString(16) Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.
// the color code should starting with "#". and then use 2 characters per color.
function colorOf(r, g, b) {
  let rr = r.toString(16),
    gg = g.toString(16),
    bb = b.toString(16);
  if (rr.length < 2) {
    rr = `0${rr}`;
  }
  if (gg.length < 2) {
    gg = `0${gg}`;
  }
  if (bb.length < 2) {
    bb = `0${bb}`;
  }

  return `#${rr + gg + bb}`;
}

// Write a function which takes a number and returns the corresponding ASCII char for that value.
function getChar(str) {
  return String.fromCharCode(str);
}
