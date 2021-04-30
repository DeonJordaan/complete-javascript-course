'use strict';

const budget = Object.freeze([
	{ value: 250, description: 'Sold old TV 📺', user: 'jonas' },
	{ value: -45, description: 'Groceries 🥑', user: 'jonas' },
	{ value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
	{ value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
	{ value: -1100, description: 'New iPhone 📱', user: 'jonas' },
	{ value: -20, description: 'Candy 🍭', user: 'matilda' },
	{ value: -125, description: 'Toys 🚂', user: 'matilda' },
	{ value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
	jonas: 1500,
	matilda: 100,
});
// spendingLimits.jay = 200; // Does not work because object is immutable

const getLimit = (limits, user) => limits?.[user] ?? 0;

// NOTE PURE Function
const addExpense = function (
	state,
	limits,
	value,
	description,
	user = 'jonas'
) {
	const cleanUser = user.toLowerCase();

	return value <= getLimit(limits, cleanUser)
		? [...state, { value: -value, description, user: cleanUser }]
		: state;
};

const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
console.log(newBudget1);

const newBudget2 = addExpense(
	newBudget1,
	spendingLimits,
	100,
	'Going to movies 🍿',
	'Matilda'
);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');

//Pure function
// const checkExpenses = function (state, limits) {
// 	return state.map(entry => {
// 		return entry.value < -getLimit(limits, entry.user)
// 			? { ...entry, flag: 'limit' }
// 			: entry;
// 	});
//Original format
// const limit = spendingLimits?.[entry.user] ?? 0; //Moved directly into the next if-block with the 'getLimit' function
// for (const entry of budget)
// 	if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
// };

// Arrow Function
const checkExpenses = (state, limits) =>
	state.map(entry =>
		entry.value < -getLimit(limits, entry.user)
			? { ...entry, flag: 'limit' }
			: entry
	);

const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);

const logBigExpenses = function (state, bigLimit) {
	const bigExpenses = state
		.filter(entry => entry.value <= -bigLimit)
		.map(entry => entry.description.slice(-2))
		.join(' / ');
	// .reduce((str, cur) => `${str} / ${cur.description.slice(-2)}`, '');

	console.log(bigExpenses);

	// let output = '';
	// for (const entry of budget)
	// 	output +=
	// 		entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : ''; // Emojis are 2 chars

	// output = output.slice(0, -2); // Remove last '/ '
	// console.log(output);
};

console.log(budget);
logBigExpenses(finalBudget, 500);
