// Assignment 1
/*

const country = "South Africa";
const continent = "Africa";
let population = 55000000;

console.log(country);
console.log(continent);
console.log(population);


let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

language = "fanagalo";
// continent = "Anarctica"

const halfPopulation = population / 2;
console.log(halfPopulation);

population++;
console.log(population);

const finnishPopulation = 6000000;
console.log(population > finnishPopulation);

const averagePopulation = 33000000;
console.log(population > averagePopulation);

//Traditional concatenated string
let description = (country) + ' is in ' + (continent) + ', and its ' + (population) + ' people speak ' + (language) + '.';
console.log(description);

//Template literal string
const descriptionNew = `${country} is in ${continent}, and its ${population} people speak ${language}.`
console.log(descriptionNew);


// LECTURE 18
if (population > averagePopulation) {
console.log(`${country}'s population is above average`)
} else {
    const populationDifference = (averagePopulation - population)
    console.log(`${country}'s population is ${populationDifference} below average`);
}
// */

// LECTURE 20
/*
console.log('9' - '5') // 4
console.log('19' - '13' + '17') // 617
console.log('19' - '13' + 17) // 23
console.log('123' < 57) // false
console.log(5 + 6 + '4' + 9 - 4 - 2) // 1143
*/

// LECTURE 22
/*
const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbours === 1) {
    console.log('Only 1 border!')
} else if (numNeighbours > 1) {
    console.log('More than 1 border')
} else {
    console.log('No borders')
}


// **** LECTURE 24

// const newCountry

if (language === 'english' && population < 50000000 && isIsland !== true) {
    console.log('You should live in South Africa :)')
} else {
    console.log('South Africa does not meet your criteria :(')
}
*/

// **** LECTURE 26

// const language = 'afrikaans'

// switch(language) {
//     case 'mandarin':
//         console.log('MOST number of native speakers');
//         break;
//     case 'spanish':
//         console.log('2nd place in number of native speakers');
//         break;
//     case 'english':
//         console.log('3rd place');
//         break;
//     case 'hindi':
//         console.log('Number 4');
//         break;
//     case 'arabic':
//         console.log('5th most spoken language');
//         break;
//     default:
//         console.log('Great language too :D');
//         break;
// }

// **** LECTURE 28

// console.log(`South Africa's population is ${population >= averagePopulation ? 'above' : 'below'} average`);