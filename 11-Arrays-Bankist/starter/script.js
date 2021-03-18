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
		const type = mov > 0 ? 'deposit' : 'withdrawel';

		const html = `
    <div class="movements">
      <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
			i + 1
		} ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>
  `;

		containerMovements.insertAdjacentHTML('afterbegin', html);
	});
};

displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURE

// const currencies = new Map([
// 	['USD', 'United States dollar'],
// 	['EUR', 'Euro'],
// 	['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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
console.log('-----for/of-----');
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
