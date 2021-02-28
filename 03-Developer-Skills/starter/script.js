// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// NOTE
// We work for a company building a smart home thermometer. Our most recent task is thos: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error"

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// NOTE
// 1. Understanding the problem
// - What is temp amplitude? Answer: difference between hoghest and lowest temp
// - How to compute max & min temps?
// - What's a sensor error? What to do with it?

// 2. Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// const calcTempAmplitude = function (temps) {
// 	let max = temps[0];
// 	let min = temps[0];

// 	for (let i = 0; i < temps.length; i++) {
// 		const curTemp = temps[i];

// 		if (typeof curTemp !== 'number') continue;

// 		if (curTemp > max) max = curTemp;
// 		if (curTemp < min) min = curTemp;
// 	}
// 	console.log(max, min);
// 	return max - min;
// };
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// NOTE
// PROBLEM 2
// Function should now receive two arrays of temps

// 1. Understanding the problem
// - With two arrays, should we implement the functionality twice? NO. Just merge the two arrays

// 2. Breaking up into sub-problems
// - Merge two arrays

// const temp1 = [1, -2, 4, 7, 14, 19, 13];
// const temp2 = [2, 0, 6, 9, 15, 17, 14];

// const calcTempAmplitudeNew = function (t1, t2) {
// 	const temps = t1.concat(t2);
// 	console.log(temps);

// 	let max = temps[0];
// 	let min = temps[0];

// 	for (let i = 0; i < temps.length; i++) {
// 		const curTemp = temps[i];

// 		if (typeof curTemp !== 'number') continue;

// 		if (curTemp > max) max = curTemp;
// 		if (curTemp < min) min = curTemp;
// 	}
// 	console.log(max, min);
// 	return max - min;
// };
// const amplitudeNew = calcTempAmplitudeNew(temp1, temp2);
// console.log(amplitudeNew);

// COMMENT LECTURE 61

// const measureKelvin = function () {
// 	const measurement = {
// 		type: 'temp',
// 		unit: 'celsius',

// 		//NOTE STEP 3: FIX THE BUG
// 		// value: Number(prompt('Degrees celsius')),
// 		value: 10,
// 	};

// 	// NOTE STEP 2: FIND THE BUG

// 	// console.log(measurement.value);
// 	// NOTE OTHER OPTIONS THAT CAN BE LOGGED TO THE CONSOLE
// 	// console.error(measurement.value); // ERROR
// 	// console.warn(measurement.value); // WARN
// 	console.table(measurement); // TABLE

// 	const kelvin = measurement.value + 273;
// 	return kelvin;
// };
// // NOTE STEP 1: IDENTIFY THE BUG
// console.log(measureKelvin());

// //NOTE USING A DEBUGGER
// const calcTempAmplitudeBug = function (t1, t2) {
// 	const temps = t1.concat(t2);
// 	console.log(temps);

// 	let max = 0;
// 	let min = 0;

// 	for (let i = 0; i < temps.length; i++) {
// 		const curTemp = temps[i];

// 		if (typeof curTemp !== 'number') continue;

// 		if (curTemp > max) max = curTemp;
// 		if (curTemp < min) min = curTemp;
// 	}
// 	console.log(max, min);
// 	return max - min;
// };
// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

// //NOTE STEP 1: IDENTIFY BUG
// console.log(amplitudeBug);

//COMMENT LECTURE 62 - CODING CHALLENGE

//1. WHAT DO I WANT?   AN OUTPUT STRING WITH DATA FROM AN ARRAY
//2. HOW WILL I ACHIEVE THAT?
//		I NEED TO LOG A STRING WITH AS MANY PARTS AS ELEMENTS IN THE ARRAY
//		HOW TO INCREASE COUNT OF DAYS?
//		HOW TO LOG THE TEMPS?

const temps1 = [17, 21, 23];
const temps2 = [12, 5, -5, 0, 4];
// let days = 1;

const printForecast = function (arr) {
	let str = '';
	for (let i = 0; i < arr.length; i++) {
		str += `${arr[i]}°C in ${i + 1} days ... `;
	}
	console.log('...' + str);
};
printForecast(temps1);
printForecast(temps2);
