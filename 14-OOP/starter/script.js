'use strict';

//LECTURE 205
/*
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //This will work, but NEVER do this. Never create a method inside a constructor function.
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const deon = new Person('Deon', 1976);
console.log(deon);

const nadia = new Person('Nadia', 1981);
const etienne = new Person('Etienne', 1974);
console.log(nadia, etienne);

// Testing if a variable is an instance of a constructor function
console.log(deon instanceof Person);
*/
// LECTURE 206
/*
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};

deon.calcAge();
nadia.calcAge();
etienne.calcAge();

console.log(deon.__proto__);
console.log(deon.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(deon));
console.log(Person.prototype.isPrototypeOf(nadia));
console.log(Person.prototype.isPrototypeOf(etienne));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(deon.species, nadia.species);

console.log(deon.hasOwnProperty('firstName')); //true - because it is deon's own property
console.log(deon.hasOwnProperty('species')); //false - because it has access to it via its prototype
*/
// LECTURE 208
/*
console.log(deon.__proto__);
// Object.prototype (top of the prototype chain)
console.log(deon.__proto__.__proto__);
console.log(deon.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 9, 12, 15, 18, 21];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
*/

// LECTURE 209 - Coding Challenge
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`The ${this.make} is travelling at ${this.speed} km/h`);
};

Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`The ${this.make} is travelling at ${this.speed} km/h`);
};

bmw.accelerate();
bmw.break();
bmw.accelerate();
bmw.accelerate();
bmw.break();
bmw.accelerate();
bmw.break();
bmw.break();
bmw.break();
bmw.accelerate();
mercedes.accelerate();
mercedes.break();
*/

// LECTURE 210

// Class Expression
// const PersonCl = class {};

// Class Declaration

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2021 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

// Can still set new methods the normal way
// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.greet();
console.log(PersonCl.prototype);

// NOTE Few things to keep in mind
// 1. Classes are not hoisted
// 2. Classes are first-class citizens
// 3. Classes are ALWAYS executed in strict mode
