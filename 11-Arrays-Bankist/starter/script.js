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

const displayMovements = function (movements) {
	containerMovements.innerHTML = '';

	movements.forEach(function (mov, i) {
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

displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
	const balance = movements.reduce((acc, mov) => acc + mov, 0);
	labelBalance.textContent = `${balance}€`;
};
calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (movements) {
	const incomes = movements
		.filter(mov => mov > 0)
		.reduce((acc, mov) => acc + mov, 0);
	labelSumIn.textContent = `${incomes}€`;

	const out = movements
		.filter(mov => mov < 0)
		.reduce((acc, mov) => acc + mov, 0);
	labelSumOut.textContent = `${Math.abs(out)}€`;

	const interest = movements
		.filter(mov => mov > 0)
		.map(deposit => (deposit * 1.2) / 100)
		.filter((int, i, arr) => {
			// console.log(arr);
			return int >= 1;
		})
		.reduce((acc, int) => acc + int, 0);
	labelSumInterest.textContent = `${interest}€`;
};
calcDisplaySummary(account1.movements);

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

const ages = [5, 2, 4, 1, 15, 8, 3];
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
const calcAverageHumanAge = age =>
	age
		.map(age => (age <= 2 ? age * 2 : 16 + age * 4))
		.filter(age => age > 18)
		.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

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

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

for (const accountFor of accounts) {
	if (accountFor.owner === 'Jessica Davis') {
		console.log(accountFor);
	}
}
// console.log(accountFor);
