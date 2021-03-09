// Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).
function converter(mpg) {
  return +(mpg * 0.35400604).toFixed(2);
}

// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.
function highestRank(arr) {
  let maxf = 1;
  let counter = 0;
  let item;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] === arr[j]) counter++;
      if (maxf < counter) {
        maxf = counter;
        item = arr[i];
      }
    }
    counter = 0;
  }
  return item;
}

// Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.
function isDigit(s) {
  return +s === parseFloat(s);
}

// We want to create a constructor function 'NameMe', which takes first name and last name as parameters. The function combines the first and last names and saves the value in "name" property.
// We already implemented that function, but when we actually run the code, the "name" property is accessible, but the "firstName" and "lastName" is not accessible. All the properties should be accessible. Can you find what's wrong with it? A test fixture is also available
function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = `${first} ${last}`;
}

// Task: Coding in function ```grabDoll```. function accept 1 parameter:```dolls```. it's a string array, a list of some dolls.
// You need traverse ```dolls``` by using ```for``` loop. If element is  "Hello Kitty" or "Barbie doll", you should push it to a ```bag```(bag is an array, I've defined in the function); if it's other strings, we should use ```continue``` skip it.
// When the ```bag``` has three element, ```bag``` is full. You should use ```break``` jump out the loop; If ```bag``` is not full, you should traverse ```dolls``` until the last element.
// Return the ```bag``` after for loop finished.
// You should use ```for```, ```break``` and ```continue``` in your code. otherwise, your solution may not pass this kata.

function grabDoll(dolls) {
  let bag = [];
  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] == 'Hello Kitty' || dolls[i] == 'Barbie doll') {
      bag.push(dolls[i]);
    } else {
      continue;
    }
    if (bag.length >= 3) {
      break;
    }
  }
  return bag;
}

// Task: Coding in function giveMeFive, function accept 1 parameter:obj, it's an object.
// You need to the traverse the obj, if the length of the object key equals to 5, then push the key value to the array (you need to define the array by yourself, this time I won't help you). Additionally push the value to the array as well, if the length of the value is equal to 5.
// Return the five after works finished.
// You should use for..in in your code, otherwise, your solution may not pass this kata. Don't learn bad habits from those lazy guys ;-)
function giveMeFive(obj) {
  let five = [];
  for (let key in obj) {
    if (key.length === 5) {
      five.push(key);
    }
    if (obj[key].length === 5) {
      five.push(obj[key]);
    }
  }
  return five;
}

// The Challenge: Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.
function narcissistic(value) {
  let val = value.toString();
  let counter = 0;
  for (let i = 0; i < val.length; i++) {
    counter += +(val[i] ** val.length);
  }
  return value === counter;
}

// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
const countBits = function (n) {
  return [...n.toString(2)].reduce((a, b) => a + +b, 0);
};

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
function squareDigits(num) {
  return Number(
    num
      .toString()
      .split('')
      .map((x) => x ** 2)
      .join('')
  );
}

// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.
function findShort(s) {
  return Math.min(...s.split(' ').map((x) => x.length));
}

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
function highAndLow(numbers) {
  let arr = numbers.split(' ').map((x) => +x);
  return `${Math.max(...arr)} ${Math.min(...arr)}`;
}
