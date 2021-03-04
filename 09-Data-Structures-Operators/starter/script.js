'use strict';

// Data needed for a later exercise
const flights =
	'_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
	name: 'Classico Italiano',
	location: 'Via Angelo Tavanti 23, Firenze, Italy',
	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
	starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
	mainMenu: ['Pizza', 'Pasta', 'Risotto'],

	openingHours: {
		thu: {
			open: 12,
			close: 22,
		},
		fri: {
			open: 11,
			close: 23,
		},
		sat: {
			open: 0, // Open 24 hours
			close: 24,
		},
	},
	order: function (starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},
	orderDelivery: function ({
		starterIndex = 1,
		mainIndex = 0,
		address,
		time = '20:00',
	}) {
		console.log(
			`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
		);
	},
	orderPasta: function (ing1, ing2, ing3) {
		console.log(
			`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
		);
	},

	orderPizza: function (mainIngredient, ...otherIngredients) {
		console.log(mainIngredient);
		console.log(otherIngredients);
	},
};
//CODING CHALLENGE

///////////////////////////////////////////////////
// LECTURE 108
// restaurant.numGuests = 0;

// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

///////////////////////////////////////////////////
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
//NOTE Will not work if numGuests is set to 0 as 0 is a falsy value, even though it is a value

// console.log('-------------- AND --------------');

// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// console.log('Hello' && 23 && null && 'Jonas');
// if (restaurant.orderPizza) {
// 	restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('muchroom', 'spinach');

/////////////////////////////////////
// LECTURE 106
// 1. DESCTRUCTURING
// SPREAD because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

//REST because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
// 	...restaurant.mainMenu,
// 	...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

//Also works in Objects
// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(weekDays);

// 2. FUNCTIONS
// const add = function (...numbers) {
// 	let sum = 0;
// 	for (let i = 0; i < numbers.length; i++) sum += numbers[i];
// 	console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4, 9);

// const x = [23, 5, 77];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onions', 'peppers', 'spinach');
// restaurant.orderPizza('mushrooms');

///////////////////////////////////
//LECTURE 105 (FOLLOWED BY 104)
// Creating a new array by adding new elements to the front of an existing array MANUALLY
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

//Doing the same with the Spread operator (...)
// const newArr = [1, 2, ...arr];
// console.log(newArr);

//Also used when we pass arguments into functions
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// Creating shallow copies of arrays
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

//(...) works on all iterables ie arrays, strings, maps or sets
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);

//Real-world example
// const ingredients = [
// 	prompt("Let's make pasta! Ingredient 1...?"),
// 	prompt('Ingredient 2...?'),
// 	prompt('Ingredient 3...?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// Using (...) on Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guss' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

//////////////////////////////////////
// LECTURE 104 (PRECEDED BY 105/ FOLLOWED BY 103)
// restaurant.orderDelivery({
// 	time: '22:30',
// 	address: 'Via del Sole, 21',
// 	mainIndex: 2,
// 	starterIndex: 2,
// });

// restaurant.orderDelivery({
// 	address: 'Via del Sole, 21',
// 	starterIndex: 2,
// });

//Destructuring an object
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

//Destructuring an object while assigning new variable names
// const {
// 	name: restaurantName,
// 	openingHours: hours,
// 	categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

//Destructuring an object an setting default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Mutating variables while destructuring
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj); // Destructuring assignment
// console.log(a, b);

// Destructuring nested Objects
// const {
// 	fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// LECTURE 103 (PRECEDED BY 104)
//NOTE Destructuring an array
// Manual method
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// Destructuring Method
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// Exercise
// const [first, second] = restaurant.categories;
// console.log(first, second);
// Skipping an element with a blank space
// const [firstB, , secondB] = restaurant.categories;
// console.log(firstB, secondB);

// Switching /variablescategories
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);
// Manual method
// const temp = main; // Assign 'main' to temporary holder
// main = secondary; // Switch 'main' to 'secondary'
// secondary = temp; // Apply original 'main' from holder to 'secondary'
// console.log(main, secondary);

// Destructuring Method
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// Receive 2 return values from a function call
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// Getting a value and an array via destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

//Nested destructuring ie destructuring inside destructuring
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// Setting default values for variables when we are destructuring
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
