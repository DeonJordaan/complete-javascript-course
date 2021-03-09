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
const eventsArray = [...gameEvents.values()];
console.log(eventsArray);
const events = [...new Set(eventsArray)];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.

const eventDuration = 90;
console.log(
	`An event happened on average every ${
		eventDuration / gameEvents.size
	} minutes`
);

// 4.
for (const [key, value] of gameEvents) {
	key < 45
		? console.log(`FIRST HALF: ${key} ${value}`)
		: console.log(`SECOND HALF: ${key} ${value}`);
}

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
