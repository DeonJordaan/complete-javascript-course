'use strict';


 // LECTURE 33
// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} people and its capital city is ${capitalCity}`
// }

// const country1 = describeCountry('South Africa', '55 million', 'Cape Town')
// console.log(country1)
// const country2 = describeCountry('Switzerland', '8.5 million', 'Bern')
// console.log(country2)
// const country3 = describeCountry('Slovenia', '2.1 million', 'Ljubljana')
// console.log(country3)


// LECTURE 34

// let worldPopulation = 7900;

// function percentageOfWorld1(population) {
//     return (population / worldPopulation) * 100;
// }

// const worldPopulationPercentage1 = percentageOfWorld1(55);
// console.log(worldPopulationPercentage1);
// const worldPopulationPercentage2 = percentageOfWorld1(8,5);
// console.log(worldPopulationPercentage2);
// const worldPopulationPercentage3 = percentageOfWorld1(2,1);
// console.log(worldPopulationPercentage3);


// const percentageOfWorld2 = function (population) {
//     return (population / worldPopulation) * 100;
// }

// const worldPopulationPercentage1b = percentageOfWorld2(55000000);
// console.log(worldPopulationPercentage1b);
// const worldPopulationPercentage2b = percentageOfWorld2(8500000);
// console.log(worldPopulationPercentage2b);
// const worldPopulationPercentage3b = percentageOfWorld2(2100000);
// console.log(worldPopulationPercentage3b);



//  LECTURE 35

// const percentageOfWorld3 = population => population / worldPopulation * 100;

// const worldPopulationPercentage1c = percentageOfWorld3(55000000);
// console.log(worldPopulationPercentage1c);
// const worldPopulationPercentage2c = percentageOfWorld3(8500000);
// console.log(worldPopulationPercentage2c);
// const worldPopulationPercentage3c = percentageOfWorld3(2100000);
// console.log(worldPopulationPercentage3c);



// LECTURE 36

// MINE SOLUTION
// const describePopulation = function (country, population) {
//     const percentage = percentageOfWorld1(population);
//     return `${country} has ${population} people, which is about ${percentage}% of the world`
// }

// console.log(describePopulation('South Africa', 55000000));
// console.log(describePopulation('Switzerland', 8500000));
// console.log(describePopulation('Slovenia', 2100000));

// JONAS' SOLUTION

// const describePopulation = function (country, population) {
//     const percentage = percentageOfWorld1(population);
//     const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
//     console.log(description);
// }

// describePopulation('South Africa', 55);
// describePopulation('Switzerland', 8.5);
// describePopulation('Slovenia', 2.1);



// LECTURE 39

// worldPopulation = 7900000000;

// const populations = [55000000, 8500000, 2100000, 126000000];
// console.log(populations.length);
// const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
// console.log(percentages);



// // LECTURE 40

// const neighbours = ['Italy', 'Austria', 'Hungary', 'Croatia'];
// console.log(neighbours);

// neighbours.push('Utopia');
// console.log(neighbours);

// neighbours.pop(neighbours.length -1);
// console.log(neighbours);

// if (neighbours.includes('Germany')) {
//     console.log('Guten Morgen')
// } else {
// console.log ('Probably not a central European country :D');
// }

// console.log(neighbours.indexOf('Hungary'));
// neighbours[2] = 'Republic of Hungary';
// console.log(neighbours);



// LECTURE 42

// const myCountry = {
//     country : 'Slovenia',
//     capital : 'Ljubljana',
//     language : 'Slovene',
//     population : 2.1,
//     neighbours : ['Italy', 'Austria', 'Hungary', 'Croatia']
// }

// LECTURE 43

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`)

// console.log(myCountry);

// myCountry.population = 4.1;
// console.log(myCountry);

// myCountry['population'] = 2.1;
// console.log(myCountry);



// LECTURE 44

const myCountry = {
    country : 'Slovenia',
    capital : 'Ljubljana',
    language : 'Slovene',
    population : 2.1,
    neighbours : ['Italy', 'Austria', 'Hungary', 'Croatia'],

    describe : function() {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`)
    },

    checkIsland : function() {
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }
}

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);

// return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;