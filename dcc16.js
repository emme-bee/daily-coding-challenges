// nput: Array of elements
// Output: String with comma delimited elements of the array in th same order.
function printArray(array) {
  return array.join(',');
}

// Objective: Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
function arrayMadness(a, b) {
  let aa = a.reduce((a, b) => a + b ** 2, 0);
  let bb = b.reduce((a, b) => a + b ** 3, 0);
  return aa > bb;
}

// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
function multipleOfIndex(arr) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % i === 0) array.push(arr[i]);
  }
  return array;
}

// You are trying to put a hash in ruby or an object in javascript or java into an array, but it always returns error, solve it and keep it as simple as possible!
items = [];
items.push({ a: 'b', c: 'd' });

// Write a JavaScript function to get the first element of an array. Passing a parameter n (default=1) will return the first n elements of the array. If n == 0 return an empty array ([]);
function first(arr, n = 1) {
  return arr.slice(0, n);
}

// Details: You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.
const ArrowFunc = function (arr) {
  return arr.map((x) => String.fromCharCode(x)).join(''); //Complete this function
};

// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.
function differenceInAges(ages) {
  return [
    Math.min(...ages),
    Math.max(...ages),
    Math.max(...ages) - Math.min(...ages),
  ];
}
