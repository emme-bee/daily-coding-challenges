// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
var capitals = function (word) {
  let caps = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) caps.push(i);
  }
  return caps;
};

// Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.
function sakuraFall(v) {
  return v <= 0 ? 0 : 400 / v;
}

// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
function hello(name) {
  return name == `` || name == undefined
    ? `Hello, World!`
    : `Hello, ${
        name.charAt(0).toUpperCase() + name.substring(1).toLowerCase()
      }!`;
}

// Write a function that returns the total surface area and volume of a box as an array: [area, volume]
function getSize(width, height, depth) {
  return [
    (depth * width + depth * height + width * height) * 2,
    width * height * depth,
  ];
}

// There is an object/class already created called MrFreeze. Mark this object as frozen so that no other changes can be made to it.
Object.freeze(MrFreeze);

// Write a simple regex to validate a username. Length should be between 4 and 16 characters (both included).
/**
    - `^`        Start from the beginning of the string.
    - `[]`       Allow any character specified, including...
    - `a-z`      anything from a to z,
    - `0-9`      anything from 0 to 9,
    - `_`        and underscore.
    - `{4,16}`   Accept 4 to 16 of allowed characters, both numbers included.
    - `$`        End the string right after specified amount of allowed characters is given.
  */
function validateUsr(username) {
  res = /^([a-z0-9_]){4,16}$/.test(username);
  return res;
}

// Your task is to implement the authenticate() method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password.
// If, and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!" (yes, even Santa has a secret password with uppercase and lowercase letters and special characters :D), the return value must be true. Otherwise it should return false.
function Sleigh() {}

Sleigh.prototype.authenticate = function (name, password) {
  return name === 'Santa Claus' && password === 'Ho Ho Ho!';
};

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to
function updateLight(current) {
  return current == 'green' ? 'yellow' : current == 'yellow' ? 'red' : 'green';
}

// Complete the function which converts a binary number (given as a string) to a decimal number.
function binToDec(bin) {
  return parseInt(bin, 2);
}

// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).
// Write a function that given a floor in the american system returns the floor in the european system.
// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.
// Basements (negatives) stay the same as the universal level.
function getRealFloor(n) {
  if (n <= 0) return n;
  if (n === 1) return 0;
  if (n < 13) return n - 1;
  if (n >= 13) return n - 2;
}

// Add the value "codewars" to the websites array. After your code executes the websites array should == ["codewars"]
websites.push('codewars');

// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.
function findMultiples(integer, limit) {
  let arr = [];
  for (let i = integer; i <= limit; i += integer) {
    arr.push(i);
  }
  return arr;
}

// Your goal in this kata is to create complete the mouth_size method this method take one argument animal which corresponds to the animal encountered by frog. If this one is an alligator (case insensitive) return small otherwise return wide.
function mouthSize(animal) {
  return animal.toLowerCase() == 'alligator' ? 'small' : 'wide';
}

// The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.
// You will receive the following data structure representing the stairs Suzuki logged in a year. You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.
function stairsIn20(s) {
  return s.map((x) => x.reduce((a, b) => a + b)).reduce((a, b) => a + b) * 20;
}

// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.
// Because you're a nice person, you always round up the tip, regardless of the service.
function calculateTip(amount, rating) {
  switch (rating.toLowerCase()) {
    case 'terrible':
      return 0;
    case 'poor':
      return Math.ceil(amount * 0.05);
    case 'good':
      return Math.ceil(amount * 0.1);
    case 'great':
      return Math.ceil(amount * 0.15);
    case 'excellent':
      return Math.ceil(amount * 0.2);
    default:
      return 'Rating not recognised';
  }
}

// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
function between(a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}

// You've decided to write a function, guessBlue() to help automatically calculate whether you should guess "blue" or "red". guessBlue() should return the probability of drawing a blue marble, expressed as a float. For example, guessBlue(5, 5, 2, 3) should return 0.6.
function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  totalLeft = blueStart + redStart - bluePulled - redPulled;
  blue = blueStart - bluePulled;
  return blue / totalLeft;
}

// This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.
// Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to print out an expression (like 28x^7). "^1" should not be truncated when exponent = 2.
function derive(coefficient, exponent) {
  return `${coefficient * exponent}x^${exponent - 1}`;
}

// Task: Define a circular object circular
const circular = {
  value: 'Hello World',
};
circular.self = circular;

// Your task is to create a function that returns true if the given number is a Wilson prime.
function amIWilson(p) {
  return p === 5 || p === 13 || p === 563;
}

// For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"
function cookie(x) {
  if (typeof x === 'string') return `Who ate the last cookie? It was Zach!`;
  if (typeof x === 'number') return `Who ate the last cookie? It was Monica!`;
  else return `Who ate the last cookie? It was the dog!`;
}

// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.
function mango(quantity, price) {
  return (quantity - Math.floor(quantity / 3)) * price;
}

// Your task is to calculate logical value of boolean array. Test arrays are one-dimensional and their size is in the range 1-50.
// You should begin at the first value, and repeatedly apply the logical operation across the remaining elements in the array sequentially.
function logicalCalc(array, op) {
  if (op == 'AND') return array.reduce((a, b) => a && b);
  if (op == 'OR') return array.reduce((a, b) => a || b);
  if (op == 'XOR') return array.reduce((a, b) => a != b);
}

// Given the triangle of consecutive odd numbers, calculate the row sums of this triangle from the row index (starting at index 1).
function rowSumOddNumbers(n) {
  return n ** 3;
}

// Task: Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.
function xor(a, b) {
  return a !== b;
}

// Return the Nth Even Number
function nthEven(n) {
  return n * 2 - 2;
}

// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.
function uniTotal(n) {
  return n
    .split('')
    .map((x) => x.charCodeAt())
    .reduce((a, b) => a + b, 0);
}

// Task: Mr. despair wants to jump off Dutch act, So he came to the top of a building.
// Scientific research shows that a man jumped from the top of the roof, when the floor more than 6, the person will often die in an instant; When the floor is less than or equal to 6, the person will not immediately die, he would scream.
function sc(floor) {
  if (floor <= 1) return ``;
  if (floor <= 6) return `${`Aa~ `.repeat(floor - 1)}Pa! Aa!`;
  if (floor > 6) return `${`Aa~ `.repeat(floor - 1)}Pa!`;
}

// Task: Coding in function padIt, function accept 2 parameters:
// str, it's a string representing the string to pad, we need pad some "*" at leftside or rightside of str
// n, it's a number, how many times to pad the string.

function padIt(str, n) {
  let string = str;
  let i = 0;

  while (i < n) {
    if (i % 2 === 0) string = `*${string}`;
    else string = `${string}*`;
    i++;
  }
  return string;
}

// You have to create a function that converts integer given as string into ASCII uppercase letters.
// All ASCII characters have their numerical order in table.
function convert(number) {
  let arr = [];
  for (let i = 0; i < number.length; i += 2) {
    arr.push(number.slice(i, i + 2));
  }
  return String.fromCharCode(...arr);
}
