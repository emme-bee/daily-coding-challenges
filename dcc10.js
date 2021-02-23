// Task: Add the isUpperCase method to String to see whether the string is ALL CAPS.
String.prototype.isUpperCase = function () {
  return this.toUpperCase() === this.toString();
};

// The pipes connecting your level's stages together need to be fixed before you recieve any more complaints. Each pipe should be connecting, since the levels ascend, you can assume every number in the sequence after the first index will be greater than the previous and that there will be no duplicates.
function pipeFix(numbers) {
  let newArr = [];
  for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    newArr.push(i);
  }
  return newArr;
}

// Task: Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
var countSheep = function (num) {
  let sheep = ``;
  for (let i = 1; i <= num; i++) {
    sheep += `${i} sheep...`;
  }
  return sheep;
};

// Your Job: Find the sum of all multiples of n below m
function sumMul(n, m) {
  let sum = 0;
  if (n >= m) return `INVALID`;
  for (let i = n; i < m; i += n) {
    sum += i;
  }
  return sum;
}

// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!
function createArray(number) {
  let newArray = [];

  for (let counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }
  return newArray;
}

// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".
function spEng(sentence) {
  return /english/gi.test(sentence);
}

// Mission: Your mission is to implement a function htmlspecialchars() that converts the following potentially harmful characters:
function htmlspecialchars(formData) {
  return formData
    .replace(/&/g, '&amp;')
    .replace(/>/g, '&gt;')
    .replace(/</g, '&lt;')
    .replace(/"/g, '&quot;');
}

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
function doubleChar(str) {
  let string = '';
  for (let i = 0; i < str.length; i++) {
    string += str[i] + str[i];
  }
  return string;
}

// Task: Add the isUpperCase method to String to see whether the string is ALL CAPS.
String.prototype.isUpperCase = function () {
  return this == this.toUpperCase() ? true : false;
};

//
function indexOf(words, target) {
  for (let i = 0; i < words.length; i++) {
    if (words[i] === target) return i;
  }
}

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
function rot13(message) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const rot = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';

  return message.replace(/[a-z]/gi, (x) => rot[alphabet.indexOf(x)]);
}

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
function rgb(r, g, b) {
  function toHex(color) {
    if (color > 255) return 'FF';
    if (color < 0) return '00';
    else
      return color > 15
        ? color.toString(16).toUpperCase()
        : '0' + color.toString(16).toUpperCase();
  }
  return toHex(r) + toHex(g) + toHex(b);
}

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
function digital_root(n) {
  if (n < 10) return n;

  const num = n.toString().split('');
  let sum = num.reduce((a, b) => a + Number(b), 0);

  return digital_root(sum);
}

// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
function isValidWalk(walk) {
  let n = '',
    s = '',
    e = '',
    w = '';

  for (let i = 0; i < walk.length; i++) {
    if (walk[i] === 'n') n += walk[i];
    if (walk[i] === 's') s += walk[i];
    if (walk[i] === 'e') e += walk[i];
    if (walk[i] === 'w') w += walk[i];
  }
  return walk.length === 10 && n.length === s.length && w.length === e.length;
}

// Given two random values from the above game, return the Player result as: Player 1 Won!, Player 2 Won! or Draw!
function rpsls(p1, p2) {
  let choice = 'Draw!';
  const prsls = [
    `scissors paper`,
    `paper rock`,
    `rock lizard`,
    `lizard spock`,
    `spock scissors`,
    `scissors lizard`,
    `lizard paper`,
    `paper spock`,
    `spock rock`,
    `rock scissors`,
  ].map((x) => x.split(` `));
  prsls.map((x) =>
    x[0] === p1 && x[1] === p2
      ? (choice = `Player 1`)
      : x[0] === p2 && x[1] === p1
      ? (choice = `Player 2`)
      : choice
  );
  return choice !== 'Draw!' ? `${choice} Won!` : choice;
}
