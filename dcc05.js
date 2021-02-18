// Inspired by the development team at Vooza, write the function howManyLightsabersDoYouOwn/how_many_light_sabers_do_you_own that
// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.
function howManyLightsabersDoYouOwn(name) {
  return name === 'Zach' ? 18 : 0;
}

// Write a function, gooseFilter / goose-filter / goose_filter / GooseFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.
function gooseFilter(birds) {
  const geese = [
    'African',
    'Roman Tufted',
    'Toulouse',
    'Pilgrim',
    'Steinbacher',
  ];
  return birds.filter((item) => !geese.includes(item));
}

// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
function basicOp(operation, value1, value2) {
  if (operation === '+') {
    return value1 + value2;
  }
  if (operation === '-') {
    return value1 - value2;
  }
  if (operation === '*') {
    return value1 * value2;
  }
  if (operation === '/') {
    return value1 / value2;
  }
}

// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
// Create a function which translates a given DNA string into RNA.
const DNAtoRNA = (dna) => {
  return dna.split('T').join('U');
};

// Given an array of integers your solution should find the smallest integer.
// You can assume, for the purpose of this kata, that the supplied array will not be empty.
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}

// Given a non-empty array of integers, return the result of multiplying the values together in order.
function grow(arr) {
  return arr.reduce((a, b) => a * b);
}

// Create a function with two arguments that will return an array of the first (n) multiples of (x).
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
function countBy(x, n) {
  let z = [];
  for (let i = x; i <= n * x; i += x) {
    z.push(i);
  }
  return z;
}

// We need a function that can transform a number into a string.
// What ways of achieving this do you know?
function numberToString(num) {
  return `${num}`;
}

// This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?
var a = 'code';
var b = 'wa.rs';
var name = a + b;

// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
const smash = (words) => words.join(' ');

// Complete the function which converts hex number (given as a string) to a decimal number.
const hexToDec = (hexString) => parseInt(hexString, 16);

// Complete the function which returns the weekday according to the input number
function whatday(num) {
  switch (num) {
    case 1:
      return 'Sunday';
      break;
    case 2:
      return 'Monday';
      break;
    case 3:
      return 'Tuesday';
      break;
    case 4:
      return 'Wednesday';
      break;
    case 5:
      return 'Thursday';
      break;
    case 6:
      return 'Friday';
      break;
    case 7:
      return 'Saturday';
      break;
    default:
      return 'Wrong, please enter a number between 1 and 7';
  }
}

// Task: Give you a function animal, accept 1 parameter:obj
// and return a string
// When you have finished the work, click "Run Tests" to see if your code is working properly.
function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
function removeExclamationMarks(s) {
  return s.split('!').join('');
}

// In this kata you will create a function that takes in a list and returns a list with the reverse order.
function reverseList(list) {
  return list.reverse();
}

// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).
function rentalCarCost(d) {
  return d < 3 ? 40 * d : d >= 7 ? d * 40 - 50 : d * 40 - 20;
}

// Implement a function which multiplies two numbers.
const multiply = (a, b) => a * b;

// Write a function which calculates the average of the numbers in a given list.
function find_average(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
}

// The male gametes or sperm cells in humans and other mammals are heterogametic and contain one of two types of sex chromosomes. They are either X or Y. The female gametes or eggs however, contain only the X sex chromosome and are homogametic.
// The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.
// Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.
// If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";
function chromosomeCheck(sperm) {
  let congrats = "Congratulations! You're going to have a";
  return sperm === 'XY' ? congrats + ' son.' : congrats + ' daughter.';
}

// You are given two sorted arrays that contain only integers. Your task is to find a way to merge them into a single one, sorted in ascending order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.
// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.
const mergeArrays = (arr1, arr2) => [
  ...new Set(arr1.concat(arr2).sort((a, b) => a - b)),
];

// A western man is trying to find gold in a river. To do that, he passes a bucket through the river's soil and then checks if it contains any gold. However, he could be more productive if he wrote an algorithm to do the job for him.
// So, you need to check if there is gold in the bucket, and if so, return True/true. If not, return False/false.
const checkTheBucket = (bucket) => bucket.includes('gold');

// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake. Can you help her?
function greet(name) {
  if (name === 'Johnny') {
    return `Hello, my love!`;
  } else {
    return `Hello, ${name}!`;
  }
}

// Task: Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.
function saleHotdogs(n) {
  return n < 5 ? 100 * n : n >= 5 && n < 10 ? n * 95 : n * 90;
}

// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers
function multiply(number) {
  let power = Number(number.toString().replace('-', '').length);
  return Math.pow(5, power) * number;
}
