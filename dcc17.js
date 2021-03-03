// Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
function sumArray(array) {
  if (array == [] || array == null) return 0;
  return array
    .sort((a, b) => a - b)
    .slice(1, array.length - 1)
    .reduce((a, b) => a + b, 0);
}

// Let's play! You have to return which player won! In case of a draw return Draw!.
const rps = (p1, p2) => {
  let win = `Draw!`;
  const choice = ['rock scissors', 'scissors paper', 'paper rock'].map((x) =>
    x.split(' ')
  );
  choice.map((x) =>
    x[0] === p1 && x[1] === p2
      ? (win = `Player 1`)
      : x[1] === p1 && x[0] === p2
      ? (win = `Player 2`)
      : win
  );
  return win !== 'Draw!' ? `${win} won!` : win;
};

// Task: You have to write an array() function returning an array object with elements.
array = (_) => [...typeof a];

// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
function addLength(str) {
  return str.split(' ').map((x) => `${x} ${x.length}`);
}

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}

//
function enough(cap, on, wait) {
  return cap - on < wait ? Math.abs(cap - on - wait) : 0;
}

// Numbers ending with zeros are boring.
// They might be fun in your world, but not here.
// Get rid of them. Only the ending ones.
function noBoringZeros(n) {
  let nn = n.toString();
  return +nn.replace(/0+$/g, '');
}

// Write a function that rearranges an integer into its largest possible value.
function superSize(num) {
  let n = num.toString();
  return +n
    .split('')
    .sort((a, b) => b - a)
    .join('');
}

// Given an array of 4 integers [a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.
// For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.
function slope(points) {
  let slope = (points[3] - points[1]) / (points[2] - points[0]);
  return isFinite(slope) ? `${slope}` : 'undefined';
}
