//MONDAY JAN 11
// Please create a function that takes in two numbers. Print to the console the division of the these two numbers rounded down.
function aoibh(x, y) {
  return Math.floor(x / y);
}
console.log(aoibh(10, 3.25));

// TUESDAY JAN 12
function numWord(number, word) {
  return number * word.length > 100 ? 'Winner' : 'Try Again';
}
alert(numWord(10, 'schadenfreude'));

//WEDNESDAY JAN 13
let numNums = [2, 4, 6, 8];
let sum = numNums[0] + numNums[numNums.length - 1];
console.log(sum);

//THURSDAY JAN. 14
// let nameList = ["Bob", "Bobber", "Bobberson", "Bobbity", "Bobson"];
function addNameList(name4List) {
  nameList.push(name4List);
  console.log(`You are ${nameList.length} on the list!`);
}
addNameList('Bobby');

//FRIDAY JAN. 15
function newArrOdd(arr) {
  let newArr = [];
  arr.forEach((item, i) => {
    if (item % 2 === 1) {
      newArr.push(item);
    }
  });
  return newArr;
}
console.log(newArrOdd([2, 3, 4, 5, 7]));

//SATURDAY JAN. 16
function crayMath(num) {
  for (let i = 1; i <= num; i++) {
    if ((i * 3) % 2 === 0) {
      console.log(i);
    }
  }
}
crayMath(100);

//Create a function that takes in 3 numbers. The function should return the first number multiplied by the second and then subtract the third. Console.log() the resulting value
function prob(a, b, c) {
  return a * b - c;
}
console.log(prob(4, 3, 4));

//
const caps = document.querySelector('.allCaps');
document.querySelector('.allCaps').addEventListener('click', toLower);

function toLower() {
  caps.classList.toggle('allCaps');
}

//second one >.<
let input = document.querySelector('.textText');
let output = document.querySelector('.output');

input.addEventListener('input', toLowLow);

function toLowLow() {
  output.textContent = this.value.toLowerCase();
}
