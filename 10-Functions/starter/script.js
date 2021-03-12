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

const lufthansa = {
	airline: 'Lufthansa',
	iataCode: 'LH',
	bookings: [],
	book(flightNum, name) {
		console.log(
			`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
		);
		this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
	},
};

lufthansa.book(239, 'Deon Jordaan');
lufthansa.book(647, 'Nadia De Vries');

const eurowings = {
	airline: 'EuroWings',
	iataCode: 'EW',
	bookings: [],
};

const book = lufthansa.book;

//Does NOT work
// book(23, 'Etienne Jordaan');

//Call Method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 268, 'Carlos Marques');

console.log(lufthansa);

const swiss = {
	airline: 'SwissAir',
	iataCode: 'LX',
	bookings: [],
};

book.call(swiss, 471, 'Anne Scherner');

//Apply Method
const flightData = [583, 'Gavin Rossouw'];
const flightInfo = [143, 'James Dawson'];

book.apply(swiss, flightData);
book.call(swiss, ...flightInfo);
console.log(swiss);
