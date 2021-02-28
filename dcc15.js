// Imagine you are creating a game where the user has to guess the correct number. But there is a limit of how many guesses the user can do.
// If the user tries to guess more than the limit, the function should throw an error.
// If the user guess is right it should return true.
// If the user guess is wrong it should return false and lose a life.
// Can you finish the game so all the rules are met?
class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }

  guess(n) {
    if (this.lives === 0) {
      throw new Error(`out of lives`);
    }
    if (n === this.number) {
      return true;
    } else {
      this.lives--;
      return false;
    }
  }
}

// Create a function which answers the question "Are you playing banjo?". If your name starts with the letter "R" or lower case "r", you are playing banjo!
function areYouPlayingBanjo(name) {
  return name[0].toLowerCase() == `r`
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}

// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
function stringy(size) {
  let string = ``;
  for (let i = 1; i <= size; i++) {
    string += i % 2;
  }
  return string;
}

// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
// The returned value must be a string, and have "***" between each of its letters.
function twoSort(s) {
  return s.sort()[0].split('').join('***');
}

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
function well(x) {
  const good = x.filter((x) => x === 'good').length;
  return good > 2 ? `I smell a series!` : good > 0 ? `Publish!` : `Fail!`;
}

// Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.
function sayHello(name, city, state) {
  let names = name.join(' ');
  return `Hello, ${names}! Welcome to ${city}, ${state}!`;
}

// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.
// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).
// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.
function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

// Create a function that takes a string and an integer (n).
// The function should return a string that repeats the input string n number of times.
// If anything other than a string is passed in you should return "Not a string"
const repeatIt = function (str, n) {
  return typeof str !== 'string' ? `Not a string` : str.repeat(n);
};

// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!
function buildString(...template) {
  return `I like ${template.join(', ')}!`;
}

// You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.
function check(a, x) {
  return a.includes(x);
}

// You will be given an array (a) and a limit value (limit). You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
function smallEnough(a, limit) {
  return a.every((x) => x <= limit);
}

// Finish the uefaEuro2016() function so it return string
function uefaEuro2016(teams, scores) {
  return scores[0] > scores[1]
    ? `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
    : scores[0] < scores[1]
    ? `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
    : `At match ${teams[0]} - ${teams[1]}, teams played draw.`;
}

// An AI has infected a text with a character!!
// This text is now fully mutated to this character.
function contamination(text, char) {
  return char.repeat(text.length);
}
