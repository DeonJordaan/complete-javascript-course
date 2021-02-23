/*let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;
 
let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "Programmer";
let job2 = "Teacher";

console.log(myFirstJob);

// **** Lesson 12
true;
let javascriptIsFun = true
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = 'YES';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

*/

// **** Lesson 13
/*
let age = 30;
age = 31;

const birthYear = 1991;
//  birthYear = 1990;

// const job;

var job = "Programmer";
job = 'teacher';

lastName = 'Jordaan'
console.log(lastName);
*/
/*
// **** Lesson 14

// Mathematical Operators
const now = 2021
const ageDeon = now - 1976;
const ageNadia = now - 1981;
console.log(ageDeon, ageNadia);

console.log(ageDeon * 2, ageNadia / 2, 2 ** 3);
// 2 ** 3 means 2 to the poer of 3 = 2 * 2 * 2

const firstName = "Deon";
const lastName = "Jordaan";
console.log(firstName + ' ' + lastName);

//Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++;
x--;
x--;
console.log(x);

// Comparison Operators
console.log(ageDeon > ageNadia);
//asking the operator if the age of Deon is greater than the age of Sarah

console.log(ageNadia >= 18);

const isFullAge = ageNadia >= 18;

console.log(now - 1976 > now - 1981)
//How does JS know whether to do the comparison or calculation first?
*/
 

// **** LESSON 15
/*
const now = 2021
const ageDeon = now - 1976;
const ageNadia = now - 1981;

console.log(now - 1976 > now - 1981)

// console.log(25 - 10 - 5);

let x , y;
x = y = 25 - 10 - 5; //x = y = 10
console.log(x, y);

//Calculating average age to show Operator Precedence
// Remove the () and see the incorrect result
const averageAge = (ageDeon + ageNadia) / 2;
console.log(ageDeon, ageNadia, averageAge);
*/

// **** LESSON 16 CHALLENGE
/*
const markWeight1 = 78;
const markHeight1 = 1.69;
const johnWeight1 = 92;
const johnHeight1 = 1.95;

const markWeight2 = 95;
const markHeight2 = 1.88;
const johnWeight2 = 85;
const johnHeight2 = 1.76;

const markBmi1 = markWeight1 / (markHeight1 ** 2);
const johnBmi1 = johnWeight1 / (johnHeight1 ** 2);
const markBmi2 = markWeight2 / (markHeight2 ** 2);
const johnBmi2 = johnWeight2 / (johnHeight2 ** 2);

console.log(markBmi1, johnBmi1, markBmi2, johnBmi2);

const markHigherBMI1 = markBmi1 > johnBmi1;
const markHigherBMI2 = markBmi2 > johnBmi2;
console.log(markHigherBMI1, markHigherBMI2);
*/



// **** LESSON 17
/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I\'m " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...'but does it work with quotation marks?'"Apparently it does!"`)

console.log('String with \n\multiple different \n\lines');
console.log(`String with
multiple different
lines`)
*/

/*
const age = 15;

if (age >= 18) {
console.log('Nadia can get a driving licence 🚗');
}
else {
    const yearsLeft = 18 - age;
    console.log(`Nadia is too young. Wait another ${yearsLeft} years :)`)
}
// The 'if ()' value must always be a Boolean. if true, the following code is executed, if not, then not


// Creating a variable conditionally
const birthYear = 1991;

let century
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

// **** LESSON 19 CODING CHALLENGE

// const markWeight1 = 78;
// const markHeight1 = 1.69;
// const johnWeight1 = 92;
// const johnHeight1 = 1.95;

// const markWeight2 = 95;
// const markHeight2 = 1.88;
// const johnWeight2 = 85;
// const johnHeight2 = 1.76;

// const markBmi1 = markWeight1 / (markHeight1 ** 2);
// const johnBmi1 = johnWeight1 / (johnHeight1 ** 2);
// const markBmi2 = markWeight2 / (markHeight2 ** 2);
// const johnBmi2 = johnWeight2 / (johnHeight2 ** 2);

// console.log(markBmi1, johnBmi1, markBmi2, johnBmi2);

// const markHigherBMI1 = markBmi1 > johnBmi1;
// const markHigherBMI2 = markBmi2 > johnBmi2;
// console.log(markHigherBMI1, markHigherBMI2);

// if (markBmi1 > johnBmi1) {
//     console.log(`Mark's BMI (${markBmi1}) is higher than John's (${johnBmi1})!`);
// } else {
//     console.log(`John's BMI (${johnBmi1})is higher than Mark's (${markBmi1})!`);
// } 

// **** LESSON 20
/*
// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

//What happens when we try something that cannot be converted?
console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old'); //type coercion automatically changes the number to a string
console.log('I am ' + '23' + ' years old'); //same result as above 
console.log('I am ' + String(23) + ' years old'); //If JS didn't have built-in coercion, we would have to do it manually

// different operators handle coercion differently
console.log('23' - '10' - 3); //minus operator converts to numbers
console.log('23' + '10' + 3); //plus operator converts to string
console.log('23' * '10'); //multiplication converts to numbers
console.log('23' / '10'); //as does dividing
console.log('23' > '18'); //logical operator the same

//guess the outcome
let n = '1' + 1 //converts to string and concatenates to 11
n = n - 1 //converts to number and deducts 1 = 10
console.log(n)

//note that numbers are added left to right normally and only concatenated when the string is encountered
let mix = 2 + 3 + 4 + '5' // = 95
console.log(mix)
//note that the strings are deducted normally and the output only converted to string and concatenated when the '+' is reached
let mix2 = '10' - '4' - '3' - 2 + '5' // = 15
console.log(mix2)

*/

// ****LESSON 21
/*
//THE 5 FALSY VALUES : 0/ '' / undefined / null / NaN

console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('Jonas')) // not an empty string
console.log(Boolean({})) // empty object
console.log(Boolean('')) // empty string
// In truth, we will almost never use the 'Boolean' function in practice. It is done implicitly by JS in the background via Type Coercion


// In the logical context, JS will try to convert any value to Boolean, in this instance 'money'
const money = 0;
if (money) {
    console.log("Don't spend it all ;)")
} else {
    console.log('You should get a job!')
}

// Check if a variable is actually defined
//height is undefined. Undefined is a falsy value, hence the 2nd value will be executed. In this instance, there is a bug in the code, because if height is defined as 0, it will also trigger the 2nd value even though height IS DEFINED. This is because 0 is also a falsy value 
 let height;
if (height) {
    console.log('YAY! Height is defined')
} else {
    console.log('Height is UNDEFINED')
}
*/

// **** LESSON 22
/*
const age = 18;
if (age === 18) console.log('You just became an adult :D (strict)'); // Sidenote: Whenever an 'if' block has one line we don't need the curly braces {}
if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!')
} else if (favourite === 7) {
    console.log('7 is also a cool number')
} else if (favourite === 9) {
    console.log('9 is not bad either')
} else {
    console.log('Number is not 23 or 7')
}

if (favourite !== 23) console.log('Why not 23?');

*/

// **** LESSON 23 ----NONE

// **** LESSON 24
/*
const hasDriversLicence = true // A
const hasGoodVision = true // B

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);


// if (hasDriversLicence && hasGoodVision) {
//     console.log('Sarah is able to drive')
// } else {
//     console.log('Someone else should drive')
// }

const isTired = true // C
console.log(hasDriversLicence && hasGoodVision && isTired);

if (hasDriversLicence && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive')
} else {
    console.log('Someone else should drive')
}
*/

// **** LESSON 25 - CODING CHALENGE

// const dolphinsPoints = [96, 108, 89]
// const koalasPoints = [88, 91, 110]

// const averageScoreDolphins = (97 + 112 + 101) / 3;
// console.log(averageScoreDolphins);

// const averageScoreKoalas = (109 + 95 + 106) / 3;
// console.log(averageScoreKoalas);

// const minimumScore = 100

// if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= minimumScore) {
//     console.log('The Dolphins are the WINNERS!')
// } else if (averageScoreKoalas > averageScoreDolphins && averageScoreKoalas >= minimumScore) {
//     console.log('The Koalas are the WINNERS!')
// } else if (averageScoreDolphins === averageScoreKoalas && averageScoreDolphins >= minimumScore && averageScoreKoalas >= minimumScore) {
//     console.log('We have a DRAW!')
// } else {
//     console.log('Unfortunately neither team has enough points to be declared the winner')
// }

// **** LESSON 26

// const day = 'sunday';

// switch(day) {
//     case 'monday': //day === 'monday' does a strict comparison
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend :D');
//         break;
//     default:
//         console.log('Not a valid day')
// } 

// // MID VIDEO CHALLENGE



// if (day === 'monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples');
// } else if (day === 'friday') {
//     console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend :D');
// } else {
//     console.log('Not a valid day')
// }

// **** LESSON 27

// 3 + 4
// 1991
// true && false && !false

// if (23 > 10) {
//     const str = '23 is bigger';
// }
// //the whole section of code is a STATEMENT, whereas the string is an EXPRESSION

// const me = 'Jonas'
// console.log(`I'm ${me} and I'm ${2037 - 1991} years old`)

// **** LESSON 28
/*
const age = 23;
age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

//Not so much used in the above format. More likely as in the example below

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

// For comparison, to do the same with an if/else block looks like the following:
let drink2;
if(age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)
*/

// **** LESSON 29 CODING CHALLENGE

// const bill = 275

// console.log(`The bill was ${bill}, the tip was ${bill >= 50 || bill <= 300 ? (bill * 0.15) : (bill * 0.2)}, and the total value `)

// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);