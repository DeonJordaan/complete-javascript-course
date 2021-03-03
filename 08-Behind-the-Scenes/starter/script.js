'use strict';

// function calcAge(birthYear) {
// 	const age = 2037 - birthYear;

// 	function printAge() {
// 		let output = `${firstName}, you are ${age}, born in ${birthYear}`;
// 		console.log(output);

// 		if (birthYear >= 1981 && birthYear <= 1996) {
// 			var millenial = true;
// 			// Creating new variable with same name as outer scope's variable
// 			const firstName = 'Steven';
// 			const string = `Oh, and you're a millenial, ${firstName}`;
// 			console.log(string);

// 			function add(a, b) {
// 				return a + b;
// 			}
// 			//Reassigning outer scope's variable
// 			output = 'NEW OUTPUT';
// 		}

// 		// console.log(string);
// 		console.log(millenial);
// 		// console.log(add(2, 3));
// 	}

// 	printAge();

// 	return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

//NOTE LECTURE 95

// Hoisting with Variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

//Hoisting with Functions
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow);
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
// 	return a + b;
// }

// const addExpr = function (a, b) {
// 	return a + b;
// };

// var addArrow = (a, b) => a + b;

// Example
// console.log(numProducts);
// if (!numProducts) deleteShoppngCart();

// var numProducts = 10;

// function deleteShoppngCart() {
// 	console.log(`All products deleted`);
// }

// Variables declared with 'var' will create a property on the global windows object
// var x = 1;
// let y = 2;
// const z = 3;

// LECTURE 97

//NOTE THIS KEYWORD IN THE GLOBAL WINDOW
// console.log(this);

// const calcAge = function (birthYear) {
// 	console.log(2037 - birthYear);
// 	console.log(this);
// };

// calcAge(1991);

//NOTE THIS KEYWORD AND AN ARROW FUNCTION
// const calcAgeArrow = birthYear => {
// 	console.log(2037 - birthYear);
// 	console.log(this);
// };

// calcAgeArrow(1980);

//NOTE THIS KEYWORD IN A METHOD
// const jonas = {
// 	year: 1991,
// 	calcAge: function () {
// 		console.log(this);
// 		console.log(2037 - this.year);
// 	},
// };
// jonas.calcAge();

//NOTE EXAMPLE TO SHOW THAT 'THIS' REFERS TO THE OBJECT CALLING THE METHOD, NOT THE OBJECT CONTAINING IT
// const matilda = {
// 	year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

//NOTE REMOVING THE FUNCTION FROM THE METHOD WHERE IT IS CALLED TO REINFORCE IT'S DYNAMIC NATURE. 'THIS' IS INSIDE THE JONAS OBJECT, YET THIS REFERS TO THE GLOBAL WINDOW.
// const f = jonas.calcAge;
// f();

//LESSON 98

//COMMENT YOU THOUGHT ${this.firstName} WOULD REFER TO THE JONAS OBJECT BECAUSE IT IS INSIDE THAT OBJECT, BUT YOU WERE WRONG. THE JONAS OBJECT DOES NOT FORM ITS OWN SCOPE BECUASE IT IS NOT A BLOCK, BUT MERELY AN OBJECT LITERAL!!!! REMINDER ABOUT ARROW FUNCTIONS NOT HAVING THEIR OWN THIS KEYWORD. THEREFORE 'this' LOOKS OVER THE JONAS OBJECT TO THE GLOBAL SCOPE HENCE 'this' IS UNDEFINED
// const jonas = {
// 	firstName: 'Jonas',
// 	year: 1991,
// 	calcAge: function () {
// 		// console.log(this);
// 		console.log(2037 - this.year);

//NOTE the isMillenial function call is a regular function call, thus 'this' would be undefined. As a result, 'this' inside the actual function is ALSO undefined. We can hack this by declaring a new variable(usually 'self' or 'that' OUTSIDE the required function and then using 'self/that' inside the function to link it to 'this', 'this' referring to 'Jonas' in this example)
// SOLUTION 1
// const self = this;
// const isMillenial = function () {
// 	console.log(self.year >= 1981 && self.year <= 1996);

// SOLUTION 2
//NOTE USE THE FACT THE ARROW FUNCTION DOES NOT HAVE ITS OWN 'this' KEYWORD. IT REFERS TO THE PARENT SCOPE, SO IN THIS INSTANCE WILL FULFILL THE SAME FUNCTION AS THE 'SELF/THAT' HACK IN THE PREVIOUS EXAMPLE
// 		const isMillenial = () => {
// 			console.log(this.year >= 1981 && this.year <= 1996);
// 		};
// 		isMillenial();
// 	},
// 	greet: () => console.log(`Hey ${this.firstName}`),
// };
// jonas.greet();
// jonas.calcAge();

// ARGUMENTS KEYWORD
//WORKS IN NORMAL FUNCTION EXPRESSION
// const addExpr = function (a, b) {
// 	console.log(arguments);
// 	return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// NOT AVAILABLE IN ARROW FUNCTIONS
// var addArrow = (a, b) => {
// 	console.log(arguments);
// 	return a + b;
// };
// addArrow(2, 5, 8, 12)

// LECTURE 99

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
// 	name: 'Jpnas',
// 	age: 30,
// };

// const friend = me;
// friend.age = 27;
// console.log('Friend:', friend);
// console.log('Me:', me);

// LECTURE 100

// PRIMITIVE TYPES
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//REFERENCE TYPES
const jessica = {
	firstName: 'Jessica',
	lastName: 'Williams',
	age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// COPYING OBJECTS
const jessica2 = {
	firstName: 'Jessica',
	lastName: 'Williams',
	age: 27,
	family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
