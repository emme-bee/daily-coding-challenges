// The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.
// 39.99 becomes $39.99
// The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).
const formatMoney = (amount) => '$' + amount.toFixed(2);

// This code does not execute properly. Try to figure out why.
const multiply = (a, b) => a * b;

// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

// Complete the solution so that it reverses the string passed into it.
function solution(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 >> [5,4,3,2,1]
function reverseSeq(n) {
  return [...Array(n).keys()].map((i) => i + 1).reverse();
}

// When provided with a number between 0-9, return it in words.
// Input :: 1
// Output :: "One".
function switchItUp(number) {
  //Write your own Code!
  switch (number) {
    case 0:
      return 'Zero';
      break;
    case 1:
      return 'One';
      break;
    case 2:
      return 'Two';
      break;
    case 3:
      return 'Three';
      break;
    case 4:
      return 'Four';
      break;
    case 5:
      return 'Five';
      break;
    case 6:
      return 'Six';
      break;
    case 7:
      return 'Seven';
      break;
    case 8:
      return 'Eight';
      break;
    case 9:
      return 'Nine';
  }
}

// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
function litres(time) {
  return time > 0 ? Math.floor(time * 0.5) : 0;
}

// Complete the solution so that it reverses all of the words within the string passed in.
function reverseWords(str) {
  return str.split(' ').reverse().join(' ');
}

// Complete the square sum function so that it squares each number passed into it and then sums the results together.
const squareSum = (numbers) =>
  numbers.map((i) => i ** 2).reduce((a, b) => a + b, 0);

// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise.
function setAlarm(e, v) {
  return e === true && v === false ? true : false;
}

// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.
function arrayPlusArray(arr1, arr2) {
  let sumArray = arr1.concat(arr2);

  return sumArray.reduce((a, b) => a + b, 0);
}

// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?"
function greet(name) {
  return 'Hello, ' + name + ' how are you doing today?';
}

// Code as fast as you can! You need to double the integer and return it.
function doubleInteger(i) {
  i *= 2;
  return i;
}

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
function summation(num) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += i;
  }
  return result;
}

// Your task is to create functionisDivideBy (or is_divide_by) to check if an integer number is divisible by each out of two arguments.
function isDivideBy(number, a, b) {
  return number % a === 0 && number % b === 0 ? true : false;
}

// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!
const sayHello = (name) => `Hello, ${name}`;

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square. If it is a square, return its area. If it is a rectangle, return its perimeter.
const areaOrPerimeter = function (l, w) {
  return l === w ? l * w : (l + w) * 2;
};

// Use variables to find the sum of the goals Messi scored in 3 competitions
let laLigaGoals = 43;
let championsLeagueGoals = 10;
let copaDelReyGoals = 5;

const totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;
return totalGoals;

// Write a function called repeat_str which repeats the given string src exactly count times.
function repeatStr(n, s) {
  if (n > 0) {
    return s.repeat(n);
  } else {
    return '';
  }
}

// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.
function isDivisible(n, x, y) {
  if (n % x === 0 && n % y === 0) return true;
  else return false;
}

// Description: Make a simple function called greet that returns the most-famous "hello world!".
greet = () => {
  return 'hello world!';
};

// The function is not returning the correct values. Can you figure out why?
function getPlanetName(id) {
  var name;
  switch (id) {
    case 1:
      name = 'Mercury';
      break;
    case 2:
      name = 'Venus';
      break;
    case 3:
      name = 'Earth';
      break;
    case 4:
      name = 'Mars';
      break;
    case 5:
      name = 'Jupiter';
      break;
    case 6:
      name = 'Saturn';
      break;
    case 7:
      name = 'Uranus';
      break;
    case 8:
      name = 'Neptune';
      break;
  }

  return name;
}

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
function abbrevName(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('.')
    .toUpperCase();
}

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.
function check(a, x) {
  return a.includes(x);
}

// In this Kata we are passing a number (n) into a function.
// Your code will determine if the number passed is even (or not).
// The function needs to return either a true or false.
// Numbers may be positive or negative, integers or floats.
// Floats are considered UNeven for this kata.
const testEven = (n) => (n % 2 === 0 ? true : false);
