// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.
// Your job is to write an algorithm that gets you from the input to the output.
function preFizz(n) {
  return Array.from({ length: n }, (_, i) => i + 1);
}

// Return an array containing the numbers from 1 to N, where N is the parametered value. N will never be less than 1 (in C#, N might be less then 1).
function fizzbuzz(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) arr.push(`FizzBuzz`);
    else if (i % 3 === 0) arr.push(`Fizz`);
    else if (i % 5 === 0) arr.push(`Buzz`);
    else arr.push(i);
  }
  return arr;
}

// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n (inclusive).
function powersOfTwo(n) {
  return Array.from({ length: n + 1 }, (el, i) => Math.pow(2, i));
}

// Can you realize a function that returns word count from a given string?
// You have to ensure that spaces in string is a whitespace for real.
function countWords(str) {
  return str.split(/\s/g).filter(Boolean).length;
}

// Write a function calculating distance between Point a and Point b.
function distanceBetweenPoints(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.
function isPalindrome(line) {
  return String(line) === String(line).split('').reverse().join('');
}
