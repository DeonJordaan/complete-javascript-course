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
/*
// Class Expression
// const PersonCl = class {};

// Class Declaration

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  
  // Instance Methods
  // Methods will be added to .prototype property.
  calcAge() {
    console.log(2021 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2021 - this.birthYear;
  }

  // Setting a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Setting a static method
  static hey() {
    console.log('Hey there! 👋');
    // console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
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
*/
// LECTURE 211
/*
// const walter = new PersonCl('Walter White', 1965);

const account = {
  owner: 'jonas',
  movements: [200, 300, -400, 350],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 125;
console.log(account.movements);

// See PersonCl
console.log(jessica.age);

// LECTURE 212

// Setting a simple static method on our constructor
// Person.hey = function () {
console.log('Hey there! 👋');
// console.log(this);
// };
// Person.hey();

// To set static method on Class, see example above
PersonCl.hey();
*/
// LECTURE 213
/*
const PersonProto = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);

steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
*/
// LECTURE 214 - Coding Challenge
/*
const CarCl = class {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`The ${this.make} is travelling at ${this.speed} km/h`);
  }

  break() {
    this.speed -= 5;
    console.log(`The ${this.make} is travelling at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(mov) {
    this.speed = mov * 1.6;
  }
};

const ford = new CarCl('Ford', 120);

console.log(ford);

console.log(ford.speedUS);

ford.break();
ford.accelerate();
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
console.log(ford.speedUS);
ford.break();
console.log(ford.speedUS);

ford.speedUS = 100;
console.log(ford.speed);
ford.break();
ford.accelerate();
*/

// LECTURE 215
/*
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear); //NOTETODO I assume 'this here refers to the 'Student' function, right?
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I am studying ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/

//LECTURE 216 - Coding Challenge
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`The ${this.make} is travelling at ${this.speed} km/h`);
};

Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`The ${this.make} is travelling at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `The ${this.make} is travelling at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV('Tesla', 120, 23);
console.log(tesla);
tesla.chargeBattery(90);
console.log(tesla);
tesla.accelerate();
console.log(tesla);
tesla.break();
console.log(tesla);
*/

// LECTURE 217
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // I
  // Methods will be added to .prototype property. Called instance methods.
  calcAge() {
    console.log(2021 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2021 - this.birthYear;
  }

  // Setting a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Setting a static method
  static hey() {
    console.log('Hey there! 👋');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // MUST always call the super function first in this constructor
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I am studying ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2021 - this.birthYear
      } years old, but as a student I feel more like ${
        2021 - this.birthYear + 10
      }`
    );
  }
}

const nadia = new StudentCl('Nadia De Vries', 1981, 'Integrative Nutrition');
// const deon = new StudentCl('Deon Jordaan', 1976, 'Web Development');

nadia.introduce();
nadia.calcAge();
*/

// LECTURE 218
/*
const PersonProto = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I am studying ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2000, 'Computer Science');
jay.introduce();
jay.calcAge();
*/

// LECTURE 219 & LECTURE 220
/*
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected property
    this._pin = pin;
    this._movements = [];
    this.locale = navigator.language;

    console.log(`Thank you for opening an account, ${this.owner}`);
  }

  // Public interface of our object

  getMovements() {
    return this._movements;
  }
  deposit(val) {
    this._movements.push(val);
  }

  // Can also call other methods insdie a new method
  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Approved loan for ${this.currency} ${val}`);
    }
  }
}

const acc1 = new Account('Deon', 'ZAR', 2104);
console.log(acc1);

// NOTE: We can add to the movements array like this, but we should never interact with an object like this
// In stead we should create methods that interact with these properties
// acc1.movements.push(250);
// acc1.movements.push(-50);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1._approveLoan(2000); // This method should be protected by data encapsulation and privacy to not be available to anyone outside the methods calling it
console.log(acc1.getMovements());

console.log(acc1);
console.log(acc1.pin);
*/

// LECTURE 221
/*
// NOTE Private CLass Fields
// 1. Public fields
// 2. Private fields
// 3. Public methods
// 4. Provate methods
// There are also static versions

class Account {
  //NOTE Public fields
  locale = navigator.language;

  //NOTE Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected property with _
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thank you for opening an account, ${this.owner}`);
  }

  //NOTE 3. Public Methods
  // Public interface of our object
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  // Can also call other methods insdie a new method
  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Approved loan for ${this.currency} ${val}`);
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  // NOTE 4. Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Deon', 'ZAR', 2104);
console.log(acc1);

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(1000));

// Account.helper();

// LECTURE 222

// Chaining
acc1.deposit(300).deposit(250).withdraw(500).requestLoan(20000).withdraw(2000);
*/
// LECTURE 224 - Coding Challenge

const CarCl = class {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`The ${this.make} is travelling at ${this.speed} km/h`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`The ${this.make} is travelling at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(mov) {
    this.speed = mov * 1.6;
  }
};

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `The ${this.make} is travelling at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);

// rivian.accelerate();
// rivian.brake();
// rivian.chargeBattery(90);

rivian.accelerate().chargeBattery(90).brake().accelerate().brake();

console.log(rivian.speedUS);
