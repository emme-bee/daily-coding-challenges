// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.
function include(arr, item) {
  return arr.includes(item);
}

// Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.
function none(arr, fun) {
  for (let i = 0; i < arr.length; i++) {
    if (fun(arr[i])) return false;
  }
  return true;
}

//Description: Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
function replace(s) {
  return s.replace(/[aeiou]/g, '!').replace(/[AEIOU]/g, '!');
}

// Description: Remove a exclamation mark from the end of string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
function remove(s) {
  return s[s.length - 1] == '!' ? s.slice(0, s.length - 1) : s;
}

// Description: Remove all exclamation marks from the end of sentence.
function remove(s) {
  return s.replace(/\!+$/g, '');
}

// Description: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.
function remove(s) {
  return `${s.split('!').join('')}!`;
}

// Description: Remove n exclamation marks in the sentence from left to right. n is positive integer.
function remove(s, n) {
  return s.replace(/!/g, function (rem) {
    if (n > 0) {
      n--;
      return '';
    }
    return rem;
  });
}

// Write function isPalindrome that checks if a given string (case insensitive) is a palindrome.
function isPalindrome(x) {
  let xx = x.split('').reverse().join('');
  return x.toLowerCase() == xx.toLowerCase() ? true : false;
}

// You have an award-winning garden and everyday the plants need exactly 40mm of water. You created a great piece of JavaScript to calculate the amount of water your plants will need when you have taken into consideration the amount of rain water that is forecast for the day. Your jealous neighbour hacked your computer and filled your code with bugs.
function rainAmount(mm) {
  return mm < 40
    ? `You need to give your plant ${40 - mm}mm of water`
    : `Your plant has had more than enough water for today!`;
}

// It's a fight between the two legends: Conor McGregor vs George Saint Pierre in Madison Square Garden. Only one fighter will remain standing, and after the fight in an interview with Joe Rogan the winner will make his legendary statement. It's your job to return the right statement depending on the winner!
var quote = function (fighter) {
  return fighter.toLowerCase() == 'conor mcgregor'
    ? "I'd like to take this chance to apologize.. To absolutely NOBODY!"
    : 'I am not impressed by your performance.';
};

// Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.
function twoDecimalPlaces(n) {
  return +n.toFixed(2);
}

//
function getNumberFromString(s) {
  return Number(s.replace(/\D/g, ''));
}

// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.
const combineNames = (first, last) => `${first} ${last}`;

// Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.
// Find the errors in the code to get the celsius converter working properly.
function weatherInfo(temp) {
  var c = convertToCelsius(temp);
  if (c < 0) return c + ' is freezing temperature';
  else return c + ' is above freezing temperature';
}

function convertToCelsius(temperature) {
  var celsius = (temperature - 32) * (5 / 9);
  return celsius;
}

// While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.
const checkAlive = (health) => (health <= 0 ? false : true);

// Fix the variables assigments so that this code stores the string 'devLab' in the variable name.
var a = 'dev',
  b = 'Lab';
var name = `${a}${b}`;

// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.
// You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.
// For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.
// All inputs will be integers. Please return an integer. Round down.
function dutyFree(n, d, h) {
  return Math.floor(h / (n * (d / 100)));
}

// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.
function peopleWithAgeDrink(old) {
  return old < 14
    ? `drink toddy`
    : old < 18
    ? `drink coke`
    : old < 21
    ? `drink beer`
    : `drink whisky`;
}

// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.
function toBinary(n) {
  return Number(n.toString(2));
}

// A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.
function main(verb, noun) {
  return verb + noun;
}

// You are creating an "Escape the room" game. The first step is to create a hash table called rooms that contains all of the rooms of the game. There should be at least 3 rooms inside it, each being a hash table with at least three properties (e.g. name, description, completed).
// Add rooms here
const rooms = {
  firstRoom: {
    name: 'One',
    description: 'First room',
    completed: false,
  },

  secondRoom: {
    name: 'Two',
    description: 'Second room',
    completed: false,
  },

  thirdRoom: {
    name: 'Three',
    description: 'Third Room',
    completed: false,
  },
};

// This function should test if the factor is a factor of base.
// Return true if it is a factor or false if it is not.
function checkForFactor(base, factor) {
  return base % factor === 0;
}

//In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
function move(position, roll) {
  return roll * 2 + position;
}

// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.
function combat(health, damage) {
  return health - damage < 0 ? 0 : health - damage;
}

// You are creating a text-based terminal version of your favorite board game. In the board game, each turn has six steps that must happen in this order: roll the dice, move, combat, get coins, buy more health, and print status.
var health = 100;
var position = 0;
var coins = 0;

function main() {
  rollDice();
  move();
  combat();
  getCoins();
  buyHealth();
  printStatus();
}
