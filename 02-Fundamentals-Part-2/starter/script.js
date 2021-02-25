'use strict';

// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) hasDriversLicence = true;
// if (hasDriversLicence) console.log('I can drive');

// const interface = 'Audio';
// const private = 534;

// function logger () {
//     console.log('My name is Jonas');
// }

// // calling, running or invoking the function
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


// **** LESSON 34

// We want the person's birthyear as an input. The input is just a parameter in this function. The parameter is like a local variable that's only available inside this function.


// FUNCTION DECLARATION

//The longer version of this function
// function calcAge1(birthYear) {
//     const age = 2037 - birthYear;
//     return age;
// }

// Shorter version, because there's really no need to create the variable to store the value, if all we do is return the value
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);


// // FUNCTION EXPRESSION

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);

// console.log(age1, age2);



// **** LESSON 35


// ARROW FUNCTION
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));


// **** LESSON 36

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
//     }

//      console.log(fruitProcessor(2, 3));




// LESSON 37


// const calcAge = function(birthYear) {
//     return 2037 - birthYear
// }

//  const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if(retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`)
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired`)
//         return -1;
//     }
// }

// console.log (yearsUntilRetirement(1991, 'Jonas'));
// console.log (yearsUntilRetirement(1970, 'Mike'));


// LESSON 38 - CODING CHALLENGE

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// // Test 1
// let scoreDolphin = calcAverage(44, 23, 71);
// let scoreKoala = calcAverage(65, 54, 49);
// console.log(scoreDolphin, scoreKoala);

// const checkWinner = function(avgDolphin, avgKoala) {
//     if (avgDolphin >= 2 * avgKoala) {
//         console.log (`Dolphins win (${avgDolphin} vs ${avgKoala})`)
//     } else if (avgKoala >= 2 * avgDolphin) {
//         console.log (`Koalas win (${avgKoala} vs ${avgDolphin})`);
//     } else {
//         console.log (`No team wins!`)
//     }
// }

// checkWinner(scoreDolphin, scoreKoala);
// checkWinner(500, 1000);

// //Test 2
// scoreDolphin = calcAverage(85, 54, 41);
// scoreKoala = calcAverage(23, 34, 27);
// console.log(scoreDolphin, scoreKoala);
// checkWinner(scoreDolphin, scoreKoala);



// **** LESSON 39

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// // Two ways to create array
// // Literal Syntax Method
// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020); 

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 2])

// // Even though arrays are declared with 'const', we can change values in the array. This is because arrays are not primitive values, hence they can be changed
// friends[2] = 'Jay';
// console.log(friends);

// // That being said, we cannot replace the entire array.
// // friends = ['Bob', 'Alice'];

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);


// // EXERCISE

// const calcAge = function(birthYear) {
//     return 2037 - birthYear
// }
// const moreYears = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(moreYears[0]);
// const age2 = calcAge(moreYears[1]);
// const age3 = calcAge(moreYears[moreYears.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(moreYears[0]), calcAge(moreYears[1]), calcAge(moreYears[moreYears.length - 1])];
// console.log(ages);



// **** LESSON 40


// // ADD ELEMENTS
// const friends = ['Michael', 'Steven', 'Peter'];
// const newLength = friends.push('Jay'); // .push - adds element to end
// console.log(friends);
// console.log(newLength);

// friends.unshift('John'); // .unshift - adds element to start
// console.log(friends);

// // REMOVE ELEMENTS
// friends.pop(); // .pop - removes last element
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // .shift - removes first element
// console.log(friends);

// console.log(friends.indexOf('Steven')); // .indexOf - tells us where in the array a specific element is located
// console.log(friends.indexOf('Bob')); // when the requested element is not in the array, returns -1

// friends.push(23);
// console.log(friends.includes('Steven')); // .includes - checks if an element is included in an array
// console.log(friends.includes('Bob')); // Will return 'false'
// console.log(friends.includes('23')); // Uses strict equality, so will return 'false'
// console.log(friends.includes(23));// Uses strict equality, so will return 'true'

// if (friends.includes('Steven')) {
//     console.log('You have a friend called Steven')
// }



// LECTURE 41 CODING CHALLENGE


// ARROW FUNCTION WITH IF/ELSE...WHY DID I DO THIS??? DUH!
// const calcTip = bill => {
//     if (bill > 50 && bill < 300) {
//         const tip = bill * .15;
//         return tip;
//     } else {
//         const tip = bill * .2;
//         return tip;
//     }
// }

//FUNCTION EXPRESSION WITH TERNARY OPERATOR VIA JONAS
// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// ARROW FUNCTION....HELLO!!!
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(calcTip(100));

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const totals = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])]

// console.log(bills, tips, totals);



// **** LESSON 42

// const jonas = {
//     firstName : 'Jonas',
//     lastName : 'Schmedtmann',
//     age : 2037 - 1991,
//     job : 'teacher',
//     friends : ['Michael', 'Peter', 'Steven']
//     // key : value (keys also called properties)
// }


//LESSON 43

// const jonas = {
//     firstName : 'Jonas',
//     lastName : 'Schmedtmann',
//     age : 2037 - 1991,
//     job : 'teacher',
//     friends : ['Michael', 'Peter', 'Steven']
//     // key : value (keys also called properties)
// }
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

// if(jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
//     } else {
//         console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
//     }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);



// // CHALLENGE
// // 'Jonas has 3 friends, and his best friend is called Michael
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)



// LESSON 44

// const jonas = {
//     firstName : 'Jonas',
//     lastName : 'Schmedtmann',
//     birthYear : 1991,
//     job : 'teacher',
//     friends : ['Michael', 'Peter', 'Steven'],
//     hasDriversLicence : true,

//     // calcAge: function(birthYear) {
//     //     return 2037 - birthYear
//     // }

//     // calcAge: function () {
//     //     // console.log(this);  // This line only here to demonstrate in the console that 'this' refers to the 'jonas' object
//     //     return 2037 - this.birthYear;
//     // }
//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return  this.age;
//     },

//     getSummary: function() {
//         console.log(`${this.firstName} is a ${this.calcAge()}-year old ${this.job} and he has ${this.hasDriversLicence ? 'a' : 'no'} driver's licence`)
//     }

// };

// console.log(jonas.calcAge()); // Dot notation
// // console.log(jonas['calcAge'](1991)); // Bracket notation
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas);


// // CHALLENGE
// // "Jonas is a 46-year old teacher, and he has a/no driver's licence"
// console.log(jonas.getSummary());

// **** LESSON 45 CODING CHALLENGE

// const mark = {
//     fullName : 'Mark Miller',
//     mass : 78,
//     height : 1.69,
    
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height ** 2);
//         return this.bmi;
//     }
// };

// const john = {
//     fullName : 'John Smith',
//     mass : 92,
//     height : 1.95,

//     calcBMI: function() {
//         this.bmi = this.mass / (this.height ** 2);
//         return this.bmi;
//     }
// };

// console.log(mark, john);

// mark.calcBMI();
// john.calcBMI(); // MUST CALL THE METHOD BEFORE IT CAN BE ACCESSED
// console.log(mark.bmi, john.bmi);

// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
// } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
// }
