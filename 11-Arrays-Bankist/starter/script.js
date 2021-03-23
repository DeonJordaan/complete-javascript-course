'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
	owner: 'Jonas Schmedtmann',
	movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
	interestRate: 1.2, // %
	pin: 1111,
};

const account2 = {
	owner: 'Jessica Davis',
	movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
	interestRate: 1.5,
	pin: 2222,
};

const account3 = {
	owner: 'Steven Thomas Williams',
	movements: [200, -200, 340, -300, -20, 50, 400, -460],
	interestRate: 0.7,
	pin: 3333,
};

const account4 = {
	owner: 'Sarah Smith',
	movements: [430, 1000, 700, 50, 90],
	interestRate: 1,
	pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//LECTURE 145
const displayMovements = function (movements, sort = false) {
	containerMovements.innerHTML = '';

	const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

	movs.forEach(function (mov, i) {
		const type = mov > 0 ? 'deposit' : 'withdrawal';

		const html = `
    <div class="movements">
      <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
			i + 1
		} ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>
  `;

		containerMovements.insertAdjacentHTML('afterbegin', html);
	});
};

const calcDisplayBalance = function (acc) {
	acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
	labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
	const incomes = acc.movements
		.filter(mov => mov > 0)
		.reduce((acc, mov) => acc + mov, 0);
	labelSumIn.textContent = `${incomes}€`;

	const out = acc.movements
		.filter(mov => mov < 0)
		.reduce((acc, mov) => acc + mov, 0);
	labelSumOut.textContent = `${Math.abs(out)}€`;

	const interest = acc.movements
		.filter(mov => mov > 0)
		.map(deposit => (deposit * acc.interestRate) / 100)
		.filter((int, i, arr) => {
			// console.log(arr);
			return int >= 1;
		})
		.reduce((acc, int) => acc + int, 0);
	labelSumInterest.textContent = `${interest}€`;
};

//LECTURE 149 EXAMPLE
const createUsernames = function (accs) {
	accs.forEach(function (acc) {
		acc.username = acc.owner
			.toLowerCase()
			.split(' ')
			.map(name => name[0])
			.join('');
	});
};

createUsernames(accounts);

const updateUI = function (acc) {
	// Display movements
	displayMovements(acc.movements);
	// Display balance
	calcDisplayBalance(acc);
	// Display summary
	calcDisplaySummary(acc);
};

//LECTURE 156
//Event Handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
	// Prevent page from default reloading upon button being clicked
	e.preventDefault();

	currentAccount = accounts.find(
		acc => acc.username === inputLoginUsername.value
	);

	if (currentAccount?.pin === Number(inputLoginPin.value)) {
		// Display UI and welcome message
		labelWelcome.textContent = `Welcome back, ${
			currentAccount.owner.split(' ')[0]
		}`;
		containerApp.style.opacity = 100;

		// Clear input fields
		inputLoginUsername.value = inputLoginPin.value = '';
		inputLoginPin.blur();

		// Update UI
		updateUI(currentAccount);
	}
});

btnTransfer.addEventListener('click', function (e) {
	e.preventDefault();
	const amount = Number(inputTransferAmount.value);
	const receiverAcc = accounts.find(
		acc => acc.username === inputTransferTo.value
	);

	inputTransferAmount.value = inputTransferTo.value = '';

	if (
		amount > 0 &&
		receiverAcc &&
		currentAccount.balance >= amount &&
		receiverAcc?.username !== currentAccount.username
	) {
		// Updating both the current & receiver account balances
		currentAccount.movements.push(-amount);
		receiverAcc.movements.push(amount);

		// Update UI
		updateUI(currentAccount);
	}
});

btnLoan.addEventListener('click', function (e) {
	e.preventDefault();

	const amount = Number(inputLoanAmount.value);

	if (
		amount > 0 &&
		currentAccount.movements.some(mov => mov >= amount * 0.1)
	) {
		// Add the movement
		currentAccount.movements.push(amount);

		// Update the UI
		updateUI(currentAccount);
	}
	inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
	e.preventDefault();

	if (
		currentAccount.username === inputCloseUsername.value &&
		currentAccount.pin === Number(inputClosePin.value)
	) {
		const index = accounts.findIndex(
			acc => acc.username === currentAccount.username
		);

		// Delete account
		accounts.splice(index, 1);

		// Hide UI
		containerApp.style.opacity = 0;
	}

	inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
	e.preventDefault();
	displayMovements(currentAccount.movements, !sorted);
	sorted = !sorted;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURE

// const currencies = new Map([
// 	['USD', 'United States dollar'],
// 	['EUR', 'Euro'],
// 	['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//LECTURE 141

// let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE method
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

//SPLICE Method
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2); // With splice, the 2nd parameter is the number of elements we want to delete
// console.log(arr);

// REVERSE Method

// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// CONCAT Method

// const letters = arr.concat(arr2);
// console.log(letters);
// Alternative method to concat two arrays with the spread operator. Eother is fine, simply a matter of personal preference
// console.log([...arr, ...arr2]); // Returns the joined array, without mutating the originals
// Same as above, but returns a string with the array elements joined
// console.log(...arr, ...arr2);

// JOIN Method
// console.log(letters.join(' - '));

//LECTURE 142

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Using a for/of loop
// console.log('-----for/of-----');
// for (const movement of movements) {
// 	if (movement > 0) {
// 		console.log(`You deposited ${Math.abs(movement)}`);
// 	} else {
// 		console.log(`You withdrew ${Math.abs(movement)}`);
// 	}
// }

// To get the current index with the .entries method
// for (const [i, movement] of movements.entries()) {
// 	if (movement > 0) {
// 		console.log(`Movement ${i + 1}: You deposited ${Math.abs(movement)}`);
// 	} else {
// 		console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
// 	}
// }

// Using a forEach method
// console.log('-----forEach-----');
// movements.forEach(function (movement) {
// 	if (movement > 0) {
// 		console.log(`You deposited ${Math.abs(movement)}`);
// 	} else {
// 		console.log(`You withdrew ${Math.abs(movement)}`);
// 	}
// });

// The forEach loop basically calls the function repeatedly, passing in the next array element as a parameter as it iterates
// 0: function(200)
// 1: function(450)
// 2: function(-400)

// To get the current index and value
// movements.forEach(function (mov, i, arr) {
// 	if (mov > 0) {
// 		console.log(`Movement ${i + 1}: You deposited ${Math.abs(mov)}`);
// 	} else {
// 		console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
// 	}
// });

//LECTURE 143

// const currencies = new Map([
// 	['USD', 'United States dollar'],
// 	['EUR', 'Euro'],
// 	['GBP', 'Pound sterling'],
// ]);

// Using forEach with a Map
// currencies.forEach(function (value, key, map) {
// 	console.log(`${key}: ${value}`);
// });

// Using forEach with a Set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
// 	console.log(`${value}: ${value}`);
// });

//LECTURE 146 - CODING CHALLENGE

// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

// const dogsJulia = [9, 16, 6, 8, 3];
// const dogsKate = [10, 5, 6, 1, 4];

//NOTE Did not do EXACTLY as Jonas said, as I didn't specifically make a copy of the incorrect array, but nonetheless, he did not specifically tell us to use '.splice' as he mentioned in the video
// const checkDogs = function (dogs1, dogs2) {
// 	const allDogs = dogs1.slice(1, -2).concat(dogs2);

// 	allDogs.forEach(function (age, i) {
// 		if (age >= 3) {
// 			console.log(
// 				`Dog number ${i + 1} is an adult, and is ${age} years old`
// 			);
// 		} else {
// 			console.log(`Dog number ${i + 1} is still a puppy 🐶`);
// 		}

//LECTURE 148

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// const movementsUSD = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

// const movementsDescriptions = movements.map((mov, i) => {
// 	`Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
// 		mov
// 	)}`;
// });

// console.log(movementsDescriptions);

//LECTURE 150

// const deposits = movements.filter(function (mov) {
// 	return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

// Using the for/of method
// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

// const withdrawels = movements.filter(mov => mov < 0);
// console.log(withdrawels);

//LECTURE 151

// console.log(movements);

// accumulator = SNOWBALL with normal function
// const balance = movements.reduce(function (acc, cur, i, arr) {
// 	console.log(`Iteration ${i}: ${acc}`);
// 	return acc + cur;
// }, 0);

// accumulator = SNOWBALL with arrow function
// const balance = movements.reduce((acc, cur) => acc + cur, 0);

// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// Maximum value of movements array

// Max movement: my solution
// const bigMove = movements.reduce((acc, cur) => {
// 	if (acc < cur) {
// 		acc = cur;
// 	}
// 	return acc;
// }, 0);
// console.log(bigMove);

// Max movement: Jonas' solution
// const max = movements.reduce((acc, mov) => {
// 	if (acc > mov) return acc;
// 	else return mov;
// }, movements[0]);
// console.log(max);

//LECTURE 152 - CODING CHALLENGE

// const ages = [5, 2, 4, 1, 15, 8, 3];
// const ages = [16, 6, 10, 5, 6, 1, 4];

///////FIXME WHY DOES THIS NOT WORK? RETURNS AN ARRAY OF 'undefined' WHEN RETURN IS REMOVED, OTHERWISE DOESN OT UPDATE TO HUMAN AGES
// const humanAge = ages.map(ages => {
// 	if (ages <= 2) {
// 		ages * 2;
// 	} else {
// 		(16 + ages) * 4;
// 	}
// 	// return ages;
// });
// console.log(humanAge);
////////////////

//FIXME Not getting all the way. Each of these methods returns an array, but I'm not saving that in a const. Hence, I cannot divide the final answer by .length because the length of 'age' is still 7, not the required 5 elements left after filtering. If I'd saved every result to a new array (seeing as each methods returns an array) I would be able to do that.
// const calcAverageHumanAge = function (age) {
// 	const humanAge =
// 		age
// 			.map(age => (age <= 2 ? age * 2 : 16 + age * 4))
// 			.filter(age => age > 18)
// 			.reduce((acc, cur) => acc + cur, 0) / age.length;

// 	console.log(humanAge);
// };

// calcAverageHumanAge(ages);

//NOTE UPDATE: After watching more of the video and seeing Jonas talk about chaining the methods and accessing length by using the 'arr' which is INCLUDED WITH ALL THESE METHODS!
// const calcAverageHumanAge = age =>
// 	age
// 		.map(age => (age <= 2 ? age * 2 : 16 + age * 4))
// 		.filter(age => age > 18)
// 		.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

// console.log(calcAverageHumanAge(ages));

//NOTE Jonas' solution which is much longer but probably better...going to actually ask about this one on Discord!

// const calcAverageHumanAge = function (ages) {
// 	const humanAges = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
// 	const adults = humanAges.filter(age => age >= 18);
// 	const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
// 	return average;
// };

// console.log(calcAverageHumanAge(ages));

//LECTURE 153

// const eurToUSD = 1.1;
// const totalDepositsUSD = movements
// 	.filter(mov => mov > 0)
// 	.map(mov => mov * eurToUSD)
// 	.reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);

/* Using the array passed in by every method to debug
const eurToUSD = 1.1;
const totalDepositsUSD = movements
	.filter(mov => mov > 0)
	.map((mov, i, arr) => {
		console.log(arr)
		return mov * eurToUSD
	})
	.reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
*/

// LECTURE 155

// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// for (const accountFor of accounts) {
// 	if (accountFor.owner === 'Jessica Davis') {
// 		console.log(accountFor);
// 	}
// }
// console.log(accountFor);

//LECTURE 159

/*
// Checks for equality
console.log(movements);
console.log(movements.includes(-130));

// SOME: Checks if an element passes the condition
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// EVERY: Checks if EVERY element passes the condition
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/

// LECTURE 160
/*
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// .flat method
const overallBalance = accounts
	.map(acc => acc.movements) // Takes the figures from the accounts.movements arrays and places each of these arrays in the new overallBalance array
	.flat() // Removes the nesting, turning the array of arrays into an array containing ALL the amounts from all those arrays in one single array of elements
	.reduce((acc, mov) => acc + mov, 0); // Accumulates all the amounts into a total amount
console.log(overallBalance);

// .flatMap method - combines the .map and .flat methods from the previous example into a single method
const overallBalance2 = accounts
	.flatMap(acc => acc.movements)
	.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);
*/
//LECTURE 161
/*
// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());

// Numbers
console.log(movements);
// console.log(movements.sort()); //The result of this will be an alphabetically sorted list of numbers

// Sorting numbers with a 'compare' callback function parameter
// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
// movements.sort((a, b) => {
// 	if (a > b) return 1;
// 	if (a < b) return -1;
// });
// That somehow works, but there is a much easier way
movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a, b) => {
// 	if (a > b) return -1;
// 	if (a < b) return 1;
// });
// That somehow works, but there is a much easier way
movements.sort((a, b) => b - a);
console.log(movements);
*/

// LECTURE 162
/*
// Creating manual arrays
console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Empty arrays with the fill method
const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));	// Does not work to fill the empty array
// x.fill(1);	// Fills the empty elements with 1
x.fill(1, 3, 5);
console.log(x);

// Existing arrays with the .fill method
const arr = [1, 2, 3, 4, 5, 6, 7];
arr.fill(23, 4, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1); // Setting the length of the array and using the index value to fill it. +1 mens the array will start from 1 and not 0, which is the first index value, since indexes ALWAYS start from 0
console.log(z);

// Converting a node-list to an array

labelBalance.addEventListener('click', function () {
	const movementsUI = Array.from(
		document.querySelectorAll('.movements__value'),
		el => Number(el.textContent.replace('€', ''))
	);
	console.log(movementsUI);
});
*/

//LECTURE 164
/*

// Exercise 1
const bankDepositSum = accounts
	.flatMap(acc => acc.movements)
	.filter(mov => mov > 0)
	.reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

// Exercise 2
// The easy way
// const numDeposits1000 = accounts
// 	.flatMap(acc => acc.movements)
// 	.filter(mov => mov >= 1000).length;

// Using reduce to count an array
const numDeposits1000 = accounts
	.flatMap(acc => acc.movements)
	// .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
	.reduce((count, cur) => (cur >= 1000 ? ++count : count), 0); //NOTE The ++ DOES NOT work in POSTFIXED use, it must be PREFIXED. See NOTE below

console.log(numDeposits1000);

// NOTE The prefixed ++
// Postfixed ++ increments the value, but returns the OLD value before incrementation
let a = 10;
console.log(a++); // Postfixed ++ logs the original value that it returns = 10
console.log(a); // Logs the new value = 11

let b = 10;
console.log(++b); // Prefixed ++ logs the already incremented value = 11
console.log(b); // Logs the new value = 11

// Exercise 3 - Using reduce to calculate an amount and place it into an object
// NOTE Great example of using something other than a primitive value as the accumulator in the .reduce method

const { deposits, withdrawals } = accounts
	.flatMap(acc => acc.movements)
	.reduce(
		(sums, cur) => {
			// cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur); //Can apply DRY to streamline this code
			sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur; //Cleaner...SPARKLING clean!
			return sums;
		},
		{ deposits: 0, withdrawals: 0 }
	);

console.log(deposits, withdrawals);

// Exercise 4 - Convert a string to Titlecase
// this is a nice title => This Is a Nice Title

const convertTitleCase = function (title) {
	const capitalize = str => str[0].toUpperCase() + str.slice(1);
	const exceptions = [
		'a',
		'an',
		'and',
		'the',
		'but',
		'or',
		'on',
		'in',
		'with',
	];

	const titleCase = title
		.toLowerCase()
		.split(' ')
		.map(word => (exceptions.includes(word) ? word : capitalize(word)))
		.join(' ');
	return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
*/

//LECTURE 165 - Coding Challenge

const dogs = [
	{ weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
	{ weight: 8, curFood: 200, owners: ['Matilda'] },
	{ weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
	{ weight: 32, curFood: 340, owners: ['Michael'] },
];

// Task 1
// Loop over the 'dogs' array containing dog objects, and for each dog, calculate
// the recommended food portion and add it to the object as a new property. Do
// not create a new array, simply loop over the array. Forumla:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of
// food, and the weight needs to be in kg)

//My solution that didn't work, but the basic idea was correct
// const recommendedFood = function (dogs) {
// 	dogs.forEach(function (dog) {
// 		dog.recFood = dog.weight ** 0.75 * 28;
// 	});
// };

dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

console.log(dogs);

// Task 2
// Find Sarah's dog and log to the console whether it's eating too much or too
// little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
// the owners array, and so this one is a bit tricky (on purpose) 🤓

// COMPLETELY WRONG
// const sarahsDog = function (dogs) {
// 	if (dogs.some(e => e.owners === 'Frank'));
// 	return true;
// };
// console.log(sarahsDog(dogs));

const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
	// I got this bit right...small victories....like tiny......miniscule!
	`${dogSarah.owners[0]}'s dog eats too ${
		dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
	}`
);

// Task 3
// Create an array containing all owners of dogs who eat too much
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
// ('ownersEatTooLittle').

//NOTE Suppose I overcomplicated this by wanting to do it in one move. This did not really work, except for the .flatMap section in version 1
// The problem with version two is that .flatMap gives me an array of the owners names and now I'm trying to check which dog eat too much/little against that array. this will never work, because I need the information contained in the FULL array....DUH!!!

//FIXME Still wonder if it is possible using .reduce?

//Version one...
// const owners = dogs.flatMap(dog => dog.owners);
// console.log(owners);

// const [ownersEatTooMuch, ownersEatTooLittle] = dogs
// 	.flatMap(dog => dog.owners)
// 	.reduce(
// 		(acc, cur) => {
// 			acc[
// 				cur.curFood > cur.recFood
// 					? ownersEatTooMuch.push(acc.owners)
// 					: ownersEatTooLittle.push(acc.owners)
// 			];
// 			return acc;
// 		},
// 		{ ownersEatTooMuch: 0, ownersEatTooLittle: 0 }
// 	);
//TODO example from Yulia on lecture Q&A board
// owners = dogs.reduce((ownsarray, dog) => {

// 	dog.curFood > dog.recommendedFood ? ownsarray[0].push(dog.owners) : ownsarray[1].push(dog.owners);

// 	return ownsarray;

//   }, [[],[]])

//   const ownersEatTooMuch = [...owners[0].flat()];

//   const ownersEatTooLittle = [...owners[1].flat()];
//
// and an example from Nicholas
// const { ownersEatTooMuch, ownersEatTooLittle } = dogs.reduce(
// 	(obj, dog) => {
// 	  dog.curFood > dog.recFood
// 		? obj.ownersEatTooMuch.push(...dog.owners)
// 		: obj.ownersEatTooLittle.push(...dog.owners);
// 	  return obj;
// 	},
// 	{ ownersEatTooMuch: [], ownersEatTooLittle: [] }
//   );

//   console.log(ownersEatTooMuch.join(' and ') + ' dogs eat too much!');
//   console.log(ownersEatTooLittle.join(' and ') + ' dogs eat too little!');

// NOTE In this example from a previous exercise we assign values to two separate arrays using one .reduce function. Surely something lie this must be possible with Task 3...?
// const { deposits, withdrawals } = accounts
// 	.flatMap(acc => acc.movements)
// 	.reduce(
// 		(sums, cur) => {
// 			// cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur); //Can apply DRY to streamline this code
// 			sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur; //Cleaner...SPARKLING clean!
// 			return sums;
// 		},
// 		{ deposits: 0, withdrawals: 0 }
// 	);
// console.log(deposits, withdrawals);

//Jonas' Solution

const ownersEatTooMuch = dogs
	.filter(dog => dog.curFood > dog.recFood)
	.flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
	.filter(dog => dog.curFood < dog.recFood)
	.flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// Task 4
//NOTE So this is not quite right. I basically hardcoded the string in the sense that, if the owners array had more than these three elements, I would have to change the string literal...BAD, BAD, BAD!!!
// console.log(
// 	`${ownersEatTooMuch[0]}, ${ownersEatTooMuch[1]} and ${ownersEatTooMuch[2]}'s dogs eat too much!`
// );
// console.log(
// 	`${ownersEatTooLittle[0]}, ${ownersEatTooLittle[1]} and ${ownersEatTooLittle[2]}'s dogs eat too little!`
// );

// Jonas' Solution
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// Task 5
// WRONG...need to use .some
// for (const enough of dogs) {
// 	console.log(dogs.curFood === dogs.recFood);
// ? console.log(true)
// : console.log(false);
// }

// Jonas' Solution
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// Task 6
const checkEatingOk = dog =>
	dog.curFood >= dogs.recFood * 0.5 && dog.curFood <= dog.recFood * 1.1;

console.log(dogs.some(checkEatingOk));

// Task 7
console.log(dogs.filter(checkEatingOk));

const what = dogs.map(dogs => dogs.curFood / dogs.recFood);
console.log(what);

// Task 8

const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);
