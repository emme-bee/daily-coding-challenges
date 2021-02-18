// Make the double() function return a new array with each value twice as large as the corresponding value in the passed in array. Your solution must use the map() function of the built-in javascript Array object. If you're not familiar with map(), reading over the documentation may help.
const double = (array) => array.map((x) => x * 2);

// The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).
function numberToPower(number, power) {
  if (power === 0) return 1;
  return number * numberToPower(number, power - 1);
}

// You need to write a function that reverses the words in a given string. A word can also fit an empty string. As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.
const reverse = (string) => string.split(' ').reverse().join(' ');

// It is easy to join two strings together like this string1 + string2.
// Another way to get the desired result would be with string1.concat(string2)
// ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.
//If one of the arguments is a number your code must coerce it into being a string.
const joinStrings = (string1, string2) => `${string1} ${string2}`;

// Your task is to make two functions, max and min (maximum and minimum in PHP and Python) that take a(n) array/vector of integers list as input and outputs, respectively, the largest and lowest number in that array/vector.
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

// In this Kata you should try to fix all the syntax errors found in the code.
// Once you think all the bugs are fixed run the code to see if it works. A correct solution should return the values specified in the overview.
//Extension: Once you have fixed all the syntax errors present in the code (basic requirement), you may attempt to optimise the code or try a different approach by coding it from scratch
function myFirstKata(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return false;
  } else {
    return (a % b) + (b % a);
  }
}

// Task: Provided is a function find which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. (no more than 85) You may assume that all array elements are unique.
const find = (a, e) => (a.indexOf(e) === -1 ? 'Not found' : a.indexOf(e));

// Task: Please refer to two example above and write your first JS function.
// mission 1: use keyword function to define your function, function name should be helloWorld(don't forget the () and {})
// mission 2: use keyword var to define a variable str, value of str should be a string: "Hello World!"(don't forget the =).
// mission 3: type the console.log() in the next line(don't forget to put the str in the brackets).
// When you have finished the work, click "Run Tests" to see if your code is working properly.
function helloWorld() {
  var str = 'Hello World!';
  console.log(str);
}

// Task: I've written five function equal1,equal2,equal3,equal4,equal5, defines six global variables v1 v2 v3 v4 v5 v6, every function has two local variables a,b, please set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100. the function equal1 is completed, please refer to this example to complete the following functions.
var v1 = 50;
(v2 = 100), (v3 = 150), (v4 = 200), (v5 = 2), (v6 = 250);
function equal1() {
  var a = v1;
  var b = v1;
  return a + b;
}
//Please refer to the example above to complete the following functions
function equal2() {
  var a = v6; //set number value to a
  var b = v3; //set number value to b
  return a - b;
}
function equal3() {
  var a = v1; //set number value to a
  var b = v5; //set number value to b
  return a * b;
}
function equal4() {
  var a = v4; //set number value to a
  var b = v5; //set number value to b
  return a / b;
}
function equal5() {
  var a = v2; //set number value to a
  var b = v6; //set number value to b
  return a % b;
}

// Task: misson 1: I've create three function, and defined some global variables, please select some variables that can make up the name of the function, and return them(Please note the uppercase and lowercase letters are different).
// misson 2: After misson 1 finished. you should click "Attempt" to see my three questions, and write the answer in function answer1, answer2,answer3
var a1 = 'A',
  a2 = 'a',
  b1 = 'B',
  b2 = 'b',
  c1 = 'C',
  c2 = 'c',
  d1 = 'D',
  d2 = 'd',
  e1 = 'E',
  e2 = 'e',
  n1 = 'N',
  n2 = 'n';
function Dad() {
  //select some variable to combine "Dad"
  return d1 + a2 + d2;
}
function Bee() {
  //select some variable to combine "Bee"
  return b1 + e2 + e2;
}
function banana() {
  //select some variable to combine "banana"
  return b2 + a2 + n2 + a2 + n2 + a2;
}

//answer some questions if you finished works above
function answer1() {
  //the answer should be "yes" or "no"
  return 'no';
}
function answer2() {
  //the answer should be "yes" or "no"
  return 'no';
}
function answer3() {
  //the answer should be "yes" or "no"
  return 'yes';
}

// In javascript, Array is one of basic data types. Define an empty array can use var arr=new Array() or var arr=[]
// Array has an attribute: length, if there is an array named arr, using arr.length to know how many elements are contained in the array.
// Each element in the array has an index, use arr[index] to get the value of element.
// index always start from 0, so the first element of array is arr[0], the last element of array is arr[arr.length-1].
// If we want to add new elements to the array, you can use the array method: push(). It can add an element to the end of the array. Instead, if we want to remove the last element of the array, you can use the array method: pop().
function getLength(arr) {
  return arr.length;
}
function getFirst(arr) {
  return arr[0];
}
function getLast(arr) {
  return arr[arr.length - 1];
}
function pushElement(arr) {
  var el = 1;
  arr.push(el);
  return arr;
}
function popElement(arr) {
  arr.pop();

  return arr;
}

// This is a spin off of my first kata. You are given a list of character sequences as a comma separated string. Write a function which returns another string containing all the character sequences except the first and the last ones, separated by spaces. If the input string is empty, or the removal of the first and last items would cause the string to be empty, return a null value.
function array(arr) {
  newArr = arr.split(',').slice(1, -1).join(' ');
  return newArr === '' ? null : newArr;
}

// Oh no! Timmy's evalObject function doesn't work. He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function?
function evalObject(value) {
  var result = 0;
  switch (value.operation) {
    case '+':
      result = value.a + value.b;
      break;
    case '-':
      result = value.a - value.b;
      break;
    case '/':
      result = value.a / value.b;
      break;
    case '*':
      result = value.a * value.b;
      break;
    case '%':
      result = value.a % value.b;
      break;
    case '^':
      result = Math.pow(value.a, value.b);
  }
  return result;
}

// Your task is to return the correct string using the Template String Feature.
// Input: Two Strings, no validation is needed.
//Output: You must output a string containing the two strings with the word ```' are '```
const TempleStrings = (obj, feature) => `${obj} are ${feature}`;

// Create a function called shortcut to remove all the lowercase vowels in a given string.
function shortcut(string) {
  return string.replace(/[aeiou]/g, '');
}

// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him
// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".
function hoopCount(n) {
  return n < 10
    ? 'Keep at it until you get it'
    : 'Great, now move on to tricks';
}

// Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.
// There will only be one 'longest' word.
function findLongest(str) {
  let spl = str.split(' ');
  let longest = 0;

  for (let i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length;
    }
  }
  return Number(longest);
}

// Create a function called _if which takes 3 arguments: a boolean value bool and 2 functions (which do not take any parameters): func1 and func2
// When bool is truth-ish, func1 should be called, otherwise call the func2.
function _if(bool, func1, func2) {
  return bool ? func1() : func2();
}

// It's a well known fact that anything Chuck Norris wants, he gets. As a result Chuck very rarely has to use the word false.
// It is a less well known fact that if something is true, and Chuck doesn't want it to be, Chuck can scare the truth with his massive biceps, and it automatically becomes false.
// Your task is to be more like Chuck (ha! good luck!). You must return false without ever actually using the word false...
function ifChuckSaysSo() {
  return 5 == 4;
}

// Task: Your task is to complete the Cat class which Extends Animal and replace the speak method to return the cats name + meows. e.g. 'Mr Whiskers meows.'
// The name attribute is passed with this.name (JS), @name (Ruby) or self.name (Python).
// class Cat extends Animal {
//   speak() {
//     return `${this.name} meows.`;
//   }
// }

// The code provided is supposed return a person's Full Name given their first and last names.
//But it's not working properly.
// Notes: The first and/or last names are never null, but may be empty.
// Task: Fix the bug so we can all go home early.
class Dinglemouse {
  constructor(firstName, lastName) {
    this.fn = firstName;
    this.ln = lastName;
  }

  getFullName() {
    return `${this.fn} ${this.ln}`.trim();
  }
}

// // Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
function fakeBin(x) {
  let fake = '';
  for (let i = 0; i < x.length; i++) {
    if (x[i] < 5) fake += '0';
    else if (x[i] >= 5) fake += '1';
  }
  return fake;
}

// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.
// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.
function correct(string) {
  return string.replace(/5/g, 'S').replace(/0/g, 'O').replace(/1/g, 'I');
}

// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
// If the input array is empty or null, return an empty array.
function countPositivesSumNegatives(input) {
  if (input == null || input == 0) return [];
  let p = 0,
    n = 0;
  //input.forEach((x) => (x > 0 ? p++ : (n += x)));
  //return [p, n];

  for (let i = 0; i < input.length; i++) {
    if (input[i] < 0) n += input[i];
    else if (input[i] > 0) p++;
  }
  return [p, n];
}

console.log(
  countPositivesSumNegatives([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    -11,
    -12,
    -13,
    -14,
    -15,
  ])
);
console.log(countPositivesSumNegatives([]));

// Create a method all which takes an array and a predicate (function pointer), and returns true if the predicate returns true for every element in the array. Otherwise, it should return false. If the array is empty, it should return true, since technically nothing failed the test.
function all(arr, fun) {
  return arr.every(fun);
}
