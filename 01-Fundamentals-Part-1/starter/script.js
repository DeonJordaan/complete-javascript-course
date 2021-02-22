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

// **** LESSON 19 CHALLENGE

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