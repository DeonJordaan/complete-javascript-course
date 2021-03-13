'use strict';

//LECTURE 127/////////////////////
// const bookings = [];

// const createBooking = function (
// 	flightNum,
// 	numPassengers = 1,
// 	price = 199 * numPassengers
// ) {
//ES5 method of declaring default parameters
//   numPassengers = numPassengers || 1;
//   price = price || 199;

// 	const booking = {
// 		flightNum,
// 		numPassengers,
// 		price,
// 	};
// 	console.log(booking);
// 	bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

//Cannot skip parameters
//createBooking('LH123', 1000) will set passengers to 1000
//To skip a parameter we must input it as undefined
// createBooking('LH123', undefined, 1000);

//LECTURE 128/////////////////////

// const flight = 'LH234';
// const jonas = {
// 	name: 'Jonas Schmedtmann',
// 	passport: 7604215072085,
// };

// const checkIn = function (flightNum, passenger) {
// 	flightNum = 'LH999';
// 	passenger.name = 'Mr. ' + passenger.name;

// 	if (passenger.passport === 7604215072085) {
// 		alert('Checked in');
// 	} else {
// 		alert('Wrong passport!');
// 	}
// };

// checkIn(flight, jonas); //NOTE This checkIn works but...
// console.log(flight);
// console.log(jonas);

//Is the same as doing this...
// const flightNum = flight;
// const passenger = jonas;

// const newPassport = function (person) {
// 	person.passport = Math.trunc(Math.random() * 1000000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas); //NOTE...this checkIn DOES NOT!
//We have to functions manipulating the same object

//LECTURE 130/////////////////////

//Generic functions
// const oneWord = function (str) {
// 	return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
// 	const [first, ...others] = str.split(' ');
// 	return [first.toUpperCase(), ...others].join(' ');
// };

//Higher Order Function
// const transformer = function (str, fn) {
// 	console.log(`Original string: ${str}`);
// 	console.log(`Transformed string: ${fn(str)}`);

// 	console.log(`Transformed by: ${fn.name}`);
// };
// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

//Using the addEventListener function
// const high5 = function () {
// 	console.log('💩');
// };
// document.body.addEventListener('click', high5);

// ['Jonas', 'Martha', 'Adam'].forEach(high5);

//LECTURE 131/////////////////////

// const greet = function (greeting) {
// 	return function (name) {
// 		console.log(`${greeting} ${name}`);
// 	};
// };

// const greeterHey = greet('Hey');

// greeterHey('Jonas');
// greeterHey('Deon');

// greet('Hello')('Deon Jordaan');

//Challenge - Basically one arrow function returning another arrow function
//MY solution
// const greetArr = greeting => {
// 	return friend => console.log(`${greeting} ${friend}`);
// };

// greetArr('Yo!')('Nadia');

//Jonas' solution
// const greetErr = greeting => friend => console.log(`${greeting} ${friend}`);

// greetErr('Hoesit!')('De Vries');

//LECTURE 132/////////////////////

// const lufthansa = {
// 	airline: 'Lufthansa',
// 	iataCode: 'LH',
// 	bookings: [],
// 	book(flightNum, name) {
// 		console.log(
// 			`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
// 		);
// 		this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
// 	},
// };

// lufthansa.book(239, 'Deon Jordaan');
// lufthansa.book(647, 'Nadia De Vries');

// const eurowings = {
// 	airline: 'EuroWings',
// 	iataCode: 'EW',
// 	bookings: [],
// };

// const book = lufthansa.book;

//Does NOT work
// book(23, 'Etienne Jordaan');

//Call Method
// book.call(eurowings, 23, 'Sarah Williams');

// book.call(lufthansa, 268, 'Carlos Marques');

// const swiss = {
// 	airline: 'SwissAir',
// 	iataCode: 'LX',
// 	bookings: [],
// };

// book.call(swiss, 471, 'Anne Scherner');

//Apply Method
// const flightData = [583, 'Gavin Rossouw'];
// const flightInfo = [143, 'James Dawson'];

// book.apply(swiss, flightData);
// book.call(swiss, ...flightInfo);

//LECTURE 132/////////////////////
// Bind method

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Raoul De Villers');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Liezl Claxton');
// bookEW23('Marie Claxton');

// console.log(lufthansa);
// console.log(swiss);
// console.log(eurowings);

//'bind' with eventlisteners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
// 	console.log(this);
// 	this.planes++;
// 	console.log(this.planes);
// };
// lufthansa.buyPlane();

// document
// 	.querySelector('.buy')
// 	.addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100));
// console.log(addVAT(23));

// Challenge
// const taxCalc = function (rate) {
// 	return function (value) {
// 		console.log(value + value * rate);
// 	};
// };
// const addVAT2 = taxCalc(0.23);
// console.log(addVAT(100));
// console.log(addVAT(23));

// LECTURE 134 - CODING CHALLENGE

const poll = {
	question: 'What is your favorite programming language?',
	options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
	answers: new Array(4).fill(0),
	registerNewAnswer() {
		let answer = Number(
			prompt(
				`What is your favorite programming language?\n0: JavaScript\n1: Python\n2: Rust\n3: C++\n(Write option number)`
			)
		);
		if (answer < 0 || answer > 3) {
			prompt(
				`Please choose one of the options!\n0: JavaScript\n1: Python\n2: Rust\n3: C++\n(Write option number)`
			);
		} else if (answer === 0) {
			this.answers[0]++;
		} else if (answer === 1) {
			this.answers[1]++;
		} else if (answer === 2) {
			this.answers[2]++;
		} else if (answer === 3) {
			this.answers[3]++;
		}
		// console.log(this.displayResults(poll.answers));
	},
	displayResults(type) {
		if (typeof type === Array) {
			console.log(poll.answers);
		} else if (typeof type === String) {
			console.log(`Poll results are ${poll.answers}`);
		}
	},
};

document.querySelector('.poll').addEventListener(
	'click',
	poll.registerNewAnswer.bind(poll)
	// poll.displayResults.bind(poll)
);
