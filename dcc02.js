// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
function longest(s1, s2) {
  let united = `${s1}${s2}`;
  return [...new Set(united.split('').sort())].join('');
}

// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.
function getAverage(marks) {
  return Math.floor(marks.reduce((a, b) => a + b) / marks.length);
}

// This kata is about converting numbers to their binary or hexadecimal representation:
// If a number is even, convert it to binary.
// If a number is odd, convert it to hex.
const evensAndOdds = (num) =>
  num % 2 === 0 ? num.toString(2) : num.toString(16);

// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
// Return True if yes, False otherwise
function hero(bullets, dragons) {
  return dragons * 2 <= bullets ? true : false;
}

// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
function warnTheSheep(queue) {
  let sheep = queue.reverse().indexOf('wolf');
  return sheep === 0
    ? 'Pls go away and stop eating my sheep'
    : `Oi! Sheep number ${sheep}! You are about to be eaten by a wolf!`;
}

// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!
// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).
// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics. Simples!
function fixTheMeerkat(arr) {
  [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  return arr;
}

// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?
// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).
function bonusTime(salary, bonus) {
  return bonus ? `£${salary * 10}` : `£${salary}`;
}

// This method, which is supposed to return the result of dividing its first argument by its second, isn't always returning correct values. Fix it.
const solve = (x, y) => x / y;

// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.
// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
// Your function will be tested with pre-made examples as well as random ones.
function findDifference(a, b) {
  a = a.reduce((a, b) => a * b);
  b = b.reduce((a, b) => a * b);
  return Math.abs(a - b);
}

// The code provided is supposed replace all the dots . in the specified String str with dashes -
// But it's not working properly.
// Task: Fix the bug so we can all go home early.
// Notes: String str will never be null.
var replaceDots = function (str) {
  return str.replace(/\./g, '-');
};

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
const quarterOf = (month) => {
  return month <= 3
    ? 1
    : month <= 6
    ? 2
    : month <= 9
    ? 3
    : month <= 12
    ? 4
    : 'try again';
};

// Grade book: Complete the function so that it finds the mean of the three scores passed to it and returns the letter value associated with that grade.
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
function getGrade(s1, s2, s3) {
  const avg = Math.round((s1 + s2 + s3) / 3);
  if (90 <= avg && avg <= 100) {
    return 'A';
  }
  if (80 <= avg && avg < 90) {
    return 'B';
  }
  if (70 <= avg && avg < 80) {
    return 'C';
  }
  if (60 <= avg && avg < 70) {
    return 'D';
  } else {
    return 'F';
  }
}

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// You can assume that all values are integers. Do not mutate the input array/list.
function invert(array) {
  return array.map((x) => (x === 0 ? x : -x));
}

// Complete the function that receives as input a string, and produces outputs according to the following table:
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".
// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".
function getDrinkByProfession(param) {
  const str = param.toLowerCase();
  switch (str) {
    case 'jabroni':
      return 'Patron Tequila';
      break;
    case 'school counselor':
      return 'Anything with Alcohol';
      break;
    case 'programmer':
      return 'Hipster Craft Beer';
      break;
    case 'bike gang member':
      return 'Moonshine';
      break;
    case 'politician':
      return 'Your tax dollars';
      break;
    case 'rapper':
      return 'Cristal';
      break;
    default:
      return 'Beer';
  }
}

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// Notes:
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
let makeNegative = (num) => (num < 0 ? num : -num);

// If you've completed this kata already and want a bigger challenge, here's the 3D version
// Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. The box is special because it has the ability to change gravity.
// There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). Below is an example of what a box of cubes might look like before and after switching gravity.
// Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity.
const flip = (d, arr) =>
  d === 'R' ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);

// You get an array of numbers, return the sum of all of the positives ones.
// Note: if there is nothing to sum, the sum is default to 0.
function positiveSum(arr) {
  let negative = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negative.push(arr[i]);
    } else {
      sum += arr[i];
    }
  }
  return sum;
}

// Time to test your basic knowledge in functions! Return the odds from a list
function odds(values) {
  // arrow it
  return values.filter((i) => i % 2 === 1);
}

// Ask a small girl - "How old are you?". She always says strange things... Lets help her!
// For correct answer program should return int from 0 to 9.
// Assume test input string always valid and may look like "1 year old" or "5 years old", etc.. The first char is number only.
function getAge(inputString) {
  return Number(inputString.charAt(0));
}

// Fix the function
// I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.
// Can you help me fix the function?
function addFive(num) {
  var total = num + 5;
  return total;
}

// Implement a function which convert the given boolean value into its string representation.
function booleanToString(b) {
  return b.toString();
}

// An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.
// Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.
function pointsPer48(ppg, mpg) {
  return Number(((48 / mpg) * ppg).toFixed(1)) || 0;
}

// When provided with a letter, return its position in the alphabet.
// Input::'a';
// Ouput::'Position of alphabet: 1';
function position(letter) {
  return `Position of alphabet: ${letter.charCodeAt(0) - 96}`;
}

// Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string)
// If either input is an empty string, consider it as zero.
function sumStr(a, b) {
  let aa = Number(a);
  let bb = Number(b);
  return (aa + bb).toString();
}

// Now you have to write a function that takes an argument and returns the square of it.
const square = (n) => Math.pow(n, 2);
