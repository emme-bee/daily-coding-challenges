//We want an array, but not just any old array, an array with contents!
// Write a function that produces an array with the numbers 0 to N-1 in it.
const arr = (N) => (N ? [...Array(N).keys()] : []);

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.
function sumMix(x) {
  return x.reduce((a, b) => a + +b, 0);
}

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
function removeEveryOther(arr) {
  return arr.filter((_, index) => index % 2 === 0);
}

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.
function howMuchILoveYou(nbPetals) {
  let arr = [
    'not at all',
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
  ];

  for (let i = 1; i <= nbPetals; i++) {
    if (i === nbPetals) return arr[i % 6];
  }
}

// Given a number n, return the number of positive odd numbers below n, EASY!
// this solution works, but times out!
function oddCount(n) {
  let sum = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (i % 2 !== 0) sum += 1;
  }
  return sum;
}

// floor division is faster on bigger numbers:
const oddCount = (n) => Math.floor(n / 2);

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
function feast(beast, dish) {
  return (
    beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  );
}

// Write a method, that will get an integer array as parameter and will process every number from this array.
function squareOrSquareRoot(array) {
  return array.map((x) => (Math.sqrt(x) % 1 === 0 ? Math.sqrt(x) : x ** 2));
}

// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.
function squareArea(A) {
  return +(((2 * A) / Math.PI) ** 2).toFixed(2);
}

// Your task is to make function, which returns the sum of a sequence of integers.
// The sequence is defined by 3 non-negative values: begin, end, step.
// If begin value is greater than the end, function should returns 0
const sequenceSum = (begin, end, step) => {
  let sum = 0;

  for (let i = begin; i <= end; i += step) {
    if (begin > end) return 0;
    else sum += i;
  }
  return sum;
};

// Description: We want to generate a function that computes the series starting from 0 and ending until the given number.
//loop
function _(count) {
  if (count < 0) return `${count}<0`;
  if (count == 0) return `0=0`;

  let sum = 0;
  let str = ``;

  for (let i = 0; i < count; i++) {
    sum += i;
    str += `${i}+`;
  }
  return `${str}${count} = ${sum + count}`;
}

//method
function _(count) {
  if (count < 0) return `${count}<0`;
  if (count == 0) return `0=0`;

  let sequence = [...Array(count + 1).keys()];
  let joined = sequence.join('+');
  let sum = sequence.reduce((a, b) => a + b, 0);

  return `${joined} = ${sum}`;
}

// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
function problem(x) {
  return typeof x !== 'number' ? 'Error' : x * 50 + 6;
}

// Add the value "codewars" to the array websites/Websites 1,000 times.
var websites = Array(1000).fill(`codewars`);

// ou are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.
function calculator(a, b, sign) {
  if (typeof a !== 'number' || typeof b !== 'number') return 'unknown value';

  if (sign === '+') {
    return a + b;
  }
  if (sign === '-') {
    return a - b;
  }
  if (sign === '*') {
    return a * b;
  }
  if (sign === '/') {
    return a / b;
  }
  if (a == '' && b == ' ') {
    return 'unknown value';
  } else {
    return 'unknown value';
  }
}

// Write a function that accepts two arguments and returns the remainder after dividing the larger number by the smaller number. Division by zero should return NaN (in C#, throw a new DivideByZeroException instead). Arguments will both be integers.
function remainder(a, b) {
  return a > b ? a % b : b % a;
}

// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.
// Your expected output is an array of positive integers from 1 to n (inclusive).
function preFizz(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}

// Task: Complete function howManydays, function accept 1 parameters:month, means the month of year, different month has different days (refer to the following table), return a number that how many days in this month(month is always greater than 0, less than or equal to 12).
function howManydays(month) {
  switch (month) {
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
      break;

    case 2:
      return 28;
      break;

    default:
      return 31;
  }
}

// Create the function that takes as a parameter an array of numbers represented as strings and outputs an array of numbers.
function toNumberArray(stringarray) {
  return stringarray.map((x) => +x);
}
