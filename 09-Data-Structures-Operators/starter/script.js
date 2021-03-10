'use strict';

// Data needed for a later exercise
const flights =
	'_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

//ES6 enhanced object literals #3
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
	[weekdays[3]]: {
		open: 12,
		close: 22,
	},
	[weekdays[4]]: {
		open: 11,
		close: 23,
	},
	[weekdays[5]]: {
		open: 0, // Open 24 hours
		close: 24,
	},
};

const restaurant = {
	name: 'Classico Italiano',
	location: 'Via Angelo Tavanti 23, Firenze, Italy',
	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
	starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
	mainMenu: ['Pizza', 'Pasta', 'Risotto'],
	//NOTE ES6 enhanced object literals #1
	openingHours,

	//NOTE ES6 enhanced object literals #2
	order(starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},
	orderDelivery({
		starterIndex = 1,
		mainIndex = 0,
		address,
		time = '20:00',
	}) {
		console.log(
			`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
		);
	},
	orderPasta(ing1, ing2, ing3) {
		console.log(
			`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
		);
	},

	orderPizza(mainIngredient, ...otherIngredients) {
		console.log(mainIngredient);
		console.log(otherIngredients);
	},
};
///////////////////////////////////////
//CODING CHALLENGE #4

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
	const inputValue = document
		.querySelector('textarea')
		.value.toLowerCase()
		.split('\n');
	console.log(inputValue);
	// const splitStr = inputValue.split('\n');
	// console.log(splitStr);

	for (const element of inputValue) {
		const lines = element.split('_');
		console.log(lines);

		// const upperCase = lines[1].toUpperCase(0);
		// console.log(upperCase);
		// const final = [lines[0], lines[1].toUpperCase(0)].join('');
		// console.log(final);
		const final = [
			lines[0],
			lines[1].replace(lines[1], lines[1].toUpperCase(0)),
		].join('');
		console.log(final);
	}
});

/*
.toUpperCase(0)

toLowerCase
remove whitespace
split at _
uppercase 2nd string
join strings

underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure
*/
///////////////////////////////////////
// LECTURE 122

//SPLIT METHOD
// console.log('a+very+nice+string'.split('+'));
// console.log('Deon Jordaan'.split(' '));

//Can use destructuring to create variables directly
//COuld do the same with 'slice, but more complicated and for longer sentences almost impossible
// const [firstName, lastName] = 'Deon Jordaan'.split(' ');

//JOIN METHOD
// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
// 	const names = name.toLowerCase().split(' ');
// 	const namesUpper = [];

// 	for (const n of names) {
// namesUpper.push(n[0].toUpperCase() + n.slice(1)); //Option 1
// 		namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
// 	}
// 	console.log(namesUpper.join(' '));
// };

// capitalizeName('jessica ann smith davis');
// capitalizeName('deon jordaan');
// capitalizeName('nAdiA de vrieS');

// Padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+'));
// console.log('Deon'.padEnd(25, '+'));
// console.log('Deon'.padStart(25, '+').padEnd(50, '@'));

//Real-world example of padding
// const maskCreditCard = function (number) {
// 	const str = number + ''; // Trick to converting a number to a string using the '+' operator, which turns its operands into strings
// 	const last = str.slice(-4);
// 	return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(76268549));
// console.log(maskCreditCard(7648268549354682));
// console.log(maskCreditCard('76482685493546826598'));

// Repeat Method
// const message2 = 'Bad weather... All departures delayed... ';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
// 	console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
// };
// planesInLine(3);
// planesInLine(10);
// planesInLine(15);

///////////////////////////////////////
//LECTURE 121

// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());
// console.log('airline'.toUpperCase());

// Fix capitilisation in a name
// const passenger = 'jOnAs';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
// 	passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// Compare user input email

// const email = 'hello@jonas.io';
// const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

//Can combine the two methods into one step
// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// Replace part of a string
// const priceGB = '288,97₤';
// const priceUS = priceGB.replace('₤', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
// 	'All passengers please report to boarding door 23. Boarding door 23!';

// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

// console.log(announcement.replace(/door/g, 'gate'));

// Boolean methods
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Air'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
// 	console.log('Part of the new Airbus family');
// }

// Practice Exercise
// const checkBaggage = function (items) {
// 	const baggage = items.toLowerCase();

// 	if (baggage.includes('knife') || baggage.includes('gun')) {
// 		console.log('You are NOT allowed on board');
// 	} else {
// 		console.log('Enjoy your flight!');
// 	}
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

///////////////////////////////////////
//LECTURE 120

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.indexOf(' ') + 1)); // The '+ 1' removes the space, as the extraction starts at the beginning parameter, which in this case is a space

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
// 	const s = seat.slice(-1);
// 	if (s === 'B' || s === 'E') console.log('You got the middle seat 😢');
// 	else console.log('You got lucky 😎');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');
// checkMiddleSeat('5F');

// console.log(new String('jonas'));
// console.log(typeof new String('jonas'));

// console.log(typeof new String('jonas').slice(1));

///////////////////////////////////////
//Lecture 119 - CODING cHALLENGE #3

const gameEvents = new Map([
	[17, '⚽️ GOAL'],
	[36, '🔁 Substitution'],
	[47, '⚽️ GOAL'],
	[61, '🔁 Substitution'],
	[64, '🔶 Yellow card'],
	[69, '🔴 Red card'],
	[70, '🔁 Substitution'],
	[72, '🔁 Substitution'],
	[76, '⚽️ GOAL'],
	[80, '⚽️ GOAL'],
	[92, '🔶 Yellow card'],
]);

// 1.
//SORT OF WRONG. CAN BE DONE IN SINGLE PROCESS
//Thought I had to convert it from a map to an array before converting to set and then array
//Explains some confusion I felt about it being an array and not a set upon completing 2nd step
// const eventsArray = [...gameEvents.values()];
// console.log(eventsArray);
// const events = [...new Set(eventsArray)];
// console.log(events);
//JONAS
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// 2.
// gameEvents.delete(64);
// console.log(gameEvents);

// 3.
//Jonas did not declare the 90min duration as a variable. Hardcoded the game duration inside the string
// const eventDuration = 90;
// console.log(
// 	`An event happened on average every ${
// 		eventDuration / gameEvents.size
// 	} minutes`
// );
//BONUS method: Uses the .pop method to remove the last key, which contains the final minute the game was still running
//.pop not only removes the element from the array, it also returns it to us. Hence we can assign it to the time variable
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
// 	`An event happened on average every ${time / gameEvents.size} minutes`
// );

// 4.
//AGAIN, this works, but Jonas has a different approach
// for (const [key, value] of gameEvents) {
// 	key < 45
// 		? console.log(`FIRST HALF: ${key} ${value}`)
// 		: console.log(`SECOND HALF: ${key} ${value}`);
// }
//JONAS
// for (const [min, event] of gameEvents) {
// 	const half = min <= 45 ? 'FIRST' : 'SECOND';
// 	console.log(` [${half} HALF] ${min}: ${event}`);
// }

///////////////////////////////////////
//Lecture 117

// const question = new Map([
// 	['question', 'What is the greatest programming language in the world?'],
// 	[1, 'C'],
// 	[2, 'Java'],
// 	[3, 'JavaScript'],
// 	['correct', 3],
// 	[true, 'Correct 🎉'],
// 	[false, 'Try again!'],
// ]);
// console.log(question);

//Convert Object to Map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

//Quiz App
// console.log(question.get('question'));
// for (const [key, value] of question) {
// 	if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);

//This works, but once again Jonas has a better solution
// answer === 3
// 	? console.log(question.get(true))
// 	: console.log(question.get(false));
// JONAS SOLUTION
// console.log(question.get(question.get('correct') === answer));
//NOTE This works because '(question.get('correct') === answer)' returns either 'true' or 'false'. Therefore, in the event of a correct answer 'true' is inserted in the code and then what the above basically says is consol.log(question.get(true)) which will give us the 'Correct 🎉' message

//Converting a Map back to an Array

// console.log([...question]);
// console.log([...question.entries()]); // Same as line above
// console.log([...question.keys()]);
// console.log([...question.values()]);
///////////////////////////////////////
//Lecture 116

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
// 	.set('open', 11)
// 	.set('close', 23)
// 	.set(true, 'We are open :D')
// 	.set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// rest.clear();

//Using arrays and objects as keys in a map
// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

///////////////////////////////////////
//Lecture 115

// const ordersSet = new Set([
// 	'Pasta',
// 	'Pizza',
// 	'Pizza',
// 	'Risotto',
// 	'Pasta',
// 	'Pizza',
// ]);
// console.log(ordersSet);

// console.log(new Set('Jonas'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// Example - Removing duplicate  values from arrays
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// console.log(staff);
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

//If we want to check the size of a set and have no need to convert it to an array, we can do the following:
// console.log(
// 	new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );

// console.log(new Set('Deon Jordaan').size);

///////////////////////////////////////
// LECTURE 113

// Property Names
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
// 	openStr += `${day}, `;
// }
// console.log(openStr);

// Property Values
// const values = Object.values(openingHours);
// console.log(values);

// Property Entries (Names & Values together)
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [day, { open, close }] of entries) {
// 	console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

//Me experimenting with the whole array
// const everything = Object.keys(restaurant);
// console.log(restaurant);
///////////////////////////////////////
// LECTURE 112
// if (restaurant.openingHours && restaurant.openingHours.mon)
// 	console.log(restaurant.openingHours.mon.open);

//with Optional Chaining
// console.log(restaurant.openingHours?.mon?.open);

//Example using the for/pf loop, nullish coalescing operator & optional chaining
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
// 	const open = restaurant.openingHours[day]?.open ?? 'closed';
// 	console.log(`On ${day}, we open at ${open}`);
// }

// Opional chaining and methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Opional chaining and arrays
// // const users = [];
// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

// console.log(users[0]?.name ?? 'User array empty');

// with the old method
// if (users.length > 0) console.log(users[0].name);
// else console.log('User array empty');

///////////////////////////////////////
// LECTURE 110

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

//'entries' method provides an array containing the index and value
// for (const what of menu.entries()) {
// 	console.log(what);
// }

//Using destructuring to output a numbered list ie index and value
// for (const [i, el] of menu.entries()) {
// 	console.log(`${i + 1}: ${el}`);
// }
//CODING CHALLENGE LECTURES 109 & 114
const game = {
	team1: 'Bayern Munich',
	team2: 'Borrussia Dortmund',
	players: [
		[
			'Neuer',
			'Pavard',
			'Martinez',
			'Alaba',
			'Davies',
			'Kimmich',
			'Goretzka',
			'Coman',
			'Muller',
			'Gnarby',
			'Lewandowski',
		],
		[
			'Burki',
			'Schulz',
			'Hummels',
			'Akanji',
			'Hakimi',
			'Weigl',
			'Witsel',
			'Hazard',
			'Brandt',
			'Sancho',
			'Gotze',
		],
	],
	score: '4:0',
	scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
	date: 'Nov 9th, 2037',
	odds: {
		team1: 1.33,
		x: 3.25,
		team2: 6.5,
	},
};

//LECTURE 109 CHALLENGE
// 1.
// VERKEERD;
// const [...players1] = game.players[0];
// const [...players2] = game.players[1];
// console.log(players1, players2);
// const [players1, players2] = game.players;
// console.log(players1, players2);

// 2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// 3.
// VERKEERD
// const allPlayers = [...game.players[0], ...game.players[1]];
// console.log(allPlayers);
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// 4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// 5.
// VERKEERD
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);
// const {
// 	odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// 6.
// const printGoals = function (...players) {
// 	console.log(`${players.length} goals were scored`);
// };
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Muller', 'Lewandowski');
// printGoals(...game.scored);
// console.log(...game.scored);

// 7.
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

//LECTURE 114 CHALLENGE
//.1
// for (const [goal, scorer] of game.scored.entries()) {
// 	console.log(`Goal ${goal + 1}: ${scorer}`);
// console.log(typeof scorer);
// }

//2.
// const odds = Object.values(game.odds);
// console.log(odds);

// const averageOdds = function (oddsValue) {
// 	let sum = 0;
// 	for (const avg of odds) {
// 		sum += avg;
// 	}
// 	let average = sum / oddsValue.length;
// 	return average;
// };
// console.log(averageOdds(odds));
//NOTE Jonas did this without creating the function, as follows:

// let average = 0;
// for (const odd of odds) average += odd;
// average = average / odds.length;
// console.log(average);

//3. VERKEERD
// console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
// console.log(`Odd of draw: ${game.odds.x}`);
// console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);
//Jonas' Solution
// for (const [team, odd] of Object.entries(game.odds)) {
// 	const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
// 	console.log(`Odd of ${teamStr} ${odd}`);
// }

//4. BONUS
// const scorers = Object.fromEntries(game.scored);

// const scorers = Object.assign({}, game.scored);
// console.log(scorers);
// console.log(typeof game.scored);
// console.log(scorers.value);

//NOTE I don't really know what to do here. I suspect the I need to loop over the 'game.scored' object in some way to count the instances of eg 'Lewandovski' who socred more than once. This would be used in some way to compute the properties. This would be combined with either 'object.create' or 'obcevt.assign' to create the new object

//JONAS' SOLUTION
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element

// const scorers = {};
// for (const player of game.scored) {
// 	scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

//NOTE Explanation from Q&A discussion:
/*
Here we need to check if the player is already added to the object "scorers" or not.

If not so add the player to the object and set its value to 1. If the player exist increment its value by 1.

So for the case of 'Lewandowski' at the first loop, it will be added to the object with a value of 1 (as 'scorers[player] = false')  then when it comes again in the loop, it will NOT be added again (as 'scorers[player] = true') but it value will be incremented by 1.
*/

//for (let i = 0; (i = game.odds.length); i++)
///////////////////////////////////////////////////
// LECTURE 108
// restaurant.numGuests = 0;

// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

// /////////////////////////////////////////////////
// LECTURE 107
// console.log('-------------- OR --------------');
// console.log(3 || 'Jonas ');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);
// console.log(restaurant);
// NOTE Will not work if numGuests is set to 0 as 0 is a falsy value, even though it is a value

// console.log('-------------- AND --------------');

// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// console.log('Hello' && 23 && null && 'Jonas');
// if (restaurant.orderPizza) {
// 	restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');
/*
// ///////////////////////////////////
// LECTURE 106
// 1. DESCTRUCTURING
// SPREAD because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
	...restaurant.mainMenu,
	...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Also works in Objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

// 2. FUNCTIONS
const add = function (...numbers) {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) sum += numbers[i];
	console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4, 9);

const x = [23, 5, 77];
add(...x);

restaurant.orderPizza('mushrooms', 'onions', 'peppers', 'spinach');
restaurant.orderPizza('mushrooms');

/////////////////////////////////
// LECTURE 105 (FOLLOWED BY 104)
// Creating a new array by adding new elements to the front of an existing array MANUALLY
const arr2 = [7, 8, 9];
const badNewArr = [1, 2, arr2[0], arr2[1], arr2[2]];
console.log(badNewArr);

// Doing the same with the Spread operator (...)
const newArr = [1, 2, ...arr2];
console.log(newArr);

// Also used when we pass arguments into functions
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Creating shallow copies of arrays
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// (...) works on all iterables ie arrays, strings, maps or sets
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

// Real-world example
const ingredients = [
	prompt("Let's make pasta! Ingredient 1...?"),
	prompt('Ingredient 2...?'),
	prompt('Ingredient 3...?'),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

// Using (...) on Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guss' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

////////////////////////////////////
// LECTURE 104 (PRECEDED BY 105/ FOLLOWED BY 103)
restaurant.orderDelivery({
	time: '22:30',
	address: 'Via del Sole, 21',
	mainIndex: 2,
	starterIndex: 2,
});

restaurant.orderDelivery({
	address: 'Via del Sole, 21',
	starterIndex: 2,
});

// Destructuring an object
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Destructuring an object while assigning new variable names
const {
	name: restaurantName,
	openingHours: hours,
	categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Destructuring an object an setting default values
const { menu2 = [], starterMenu: starters = [] } = restaurant;
console.log(menu2, starters);

// Mutating variables while destructuring
let d = 111;
let e = 999;
const obj = { d: 23, e: 7, f: 14 };

({ d, e } = obj); // Destructuring assignment
console.log(d, e);

// Destructuring nested Objects
const {
	fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// LECTURE 103 (PRECEDED BY 104)
// NOTE Destructuring an array
// Manual method
const arr3 = [2, 3, 4];
const g = arr3[0];
const h = arr3[1];
const i = arr3[2];

// Destructuring Method
const [m, n, p] = arr3;
console.log(m, n, p);
console.log(arr3);

// Exercise
const [first, second] = restaurant.categories;
console.log(first, second);
// Skipping an element with a blank space
const [firstB, , secondB] = restaurant.categories;
console.log(firstB, secondB);

// Switching /variablescategories
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
// Manual method
const temp = main; // Assign 'main' to temporary holder
main = secondary; // Switch 'main' to 'secondary'
secondary = temp; // Apply original 'main' from holder to 'secondary'
console.log(main, secondary);

// Destructuring Method
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function call
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Getting a value and an array via destructuring
const nested = [2, 4, [5, 6]];
const [aa, , bb] = nested;
console.log(aa, bb);

// Nested destructuring ie destructuring inside destructuring
const [s, , [t, u]] = nested;
console.log(s, t, u);

// Setting default values for variables when we are destructuring
const [pp = 1, qq = 1, rr = 1] = [8, 9];
console.log(pp, qq, rr);
*/
