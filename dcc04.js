// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog) if it is possible and false (0 in Prolog) if not. The input values are always positive.
const zeroFuel = (distance, mpg, fuel) => {
  return mpg * fuel >= distance ? true : false;
};

// The code gives an error!
const num = 123;
const a = num.toString();

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!
function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  const average = classPoints.reduce((a, b) => a + b) / classPoints.length;
  return average < yourPoints ? true : false;
}

// Messi goals function
// Messi is a soccer player with goals in three leagues:
// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.
function goals(liga, copa, champions) {
  return liga + copa + champions;
}

// Very simple, given a number, find its opposite.
function opposite(number) {
  return number - number * 2;
}

// Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid. Write a function to help Bob with this calculation.
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}

// Convert number to reversed array of digits: Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
function digitize(n) {
  return Array.from(String(n), Number).reverse();
}

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
let removeChar = (str) => str.substring(1, str.length - 1);

// Introduction: The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.
// Task: Given a year, return the century it is in.
const century = (year) => Math.ceil(year / 100);

// Create a method take that accepts a list/array and a number n, and returns a list/array array of the first n elements from the list/array.
const take = (arr, n) => arr.slice(0, n);

// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
function divisibleBy(numbers, divisor) {
  return numbers.filter((x) => x % divisor === 0);
}

// Given an array of integers, return a new array with each value doubled.
// For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.
function maps(x) {
  return x.map((i) => i * 2);
}

// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.
// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
function monkeyCount(n) {
  return [...Array(n).keys()].map((i) => i + 1);
}

// Simple, remove the spaces from the string, then return the resultant string.
let noSpace = (x) => x.split(' ').join('');

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
// #Input: A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.
// #Output: The middle character(s) of the word represented as a string.
function getMiddle(s) {
  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}

// Write a function that always returns 5
// Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/
function unusualFive(x) {
  return 'hello'.length;
}

// Write a function to split a string and convert it into an array of words
function stringToArray(string) {
  return Array.from(string.split(' '));
}

// Personalized greeting: Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
function greet(name, owner) {
  return name === owner ? `Hello boss` : `Hello guest`;
}

// Write a function which converts the input string to uppercase.
function makeUpperCase(str) {
  return str.toUpperCase();
}

// You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.
// Note: only positive integers will be tested.
const otherAngle = (a, b) => 180 - a - b;

// Description: We need a function that can transform a string into a number. What ways of achieving this do you know?
let stringToNumber = (str) => Number(str);

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
const countSheeps = (arrayOfSheep) =>
  arrayOfSheep.filter((i) => i === true).length;

// Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function even_or_odd(number) {
  return number % 2 ? 'Odd' : 'Even';
}

// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says: "found the needle at position " plus the index it found the needle,
function findNeedle(haystack) {
  let found = haystack.indexOf('needle');
  return `found the needle at position ${found}`;
}

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
function boolToWord(bool) {
  return bool == true ? 'Yes' : 'No';
}
