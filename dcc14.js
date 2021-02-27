// Create a class Ghost
// Ghost objects are instantiated without any arguments.
// Ghost objects are given a random color attribute of white" or "yellow" or "purple" or "red" when instantiated
class Ghost {
  constructor() {
    this.colores = ['white', 'yellow', 'purple', 'red'];
  }

  get color() {
    const randomChoice = Math.round(Math.random() * this.colores.length);
    return this.colores[randomChoice];
  }
}

// You have to do God's job. The creation method must return an array of length 2 containing objects (representing Adam and Eve). The first object in the array should be an instance of the class Man. The second should be an instance of the class Woman. Both objects have to be subclasses of Human. Your job is to implement the Human, Man and Woman classes.
class God {
  static create() {
    return [new Man(), new Woman()];
  }
}

class Human {}
class Man extends Human {}
class Woman extends Human {}

// Task: Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return johns age is 34
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get info() {
    return `${this.name}s age is ${this.age}`;
  }
}

// Task: Your task is to create a method, Math.roundTo(number, precision) which rounds a given number to precision decimal places.
Math.roundTo = function (number, precision) {
  return Number(number.toFixed(precision));
};

// Shorten it so that it meets the strict character count requirements for this Kata.
class Labrador extends Dog {
  constructor(name, age, gender, master) {
    super(name, age, gender, 'Labrador', 'Large', master, true);
  }
}
