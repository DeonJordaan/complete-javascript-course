// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// COMMENT
// We work for a company building a smart home thermometer. Our most recent task is thos: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error"

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// COMMENT
// 1. Understanding the problem
// - What is temp amplitude? Answer: difference between hoghest and lowest temp
// - How to compute max & min temps?
// - What's a sensor error? What to do with it?

// 2. Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
	let max = temps[0];
	let min = temps[0];

	for (let i = 0; i < temps.length; i++) {
		const curTemp = temps[i];

		if (typeof curTemp !== 'number') continue;

		if (curTemp > max) max = curTemp;
		if (curTemp < min) min = curTemp;
	}
	console.log(max, min);
	return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// COMMENT
// PROBLEM 2
// Function should now receive two arrays of temps

// 1. Understanding the problem
// - With two arrays, should we implement the functionality twice? NO. Just merge the two arrays

// 2. Breaking up into sub-problems
// - Merge two arrays

const temp1 = [1, -2, 4, 7, 14, 19, 13];
const temp2 = [2, 0, 6, 9, 15, 17, 14];

const calcTempAmplitudeNew = function (t1, t2) {
	const temps = t1.concat(t2);
	console.log(temps);

	let max = temps[0];
	let min = temps[0];

	for (let i = 0; i < temps.length; i++) {
		const curTemp = temps[i];

		if (typeof curTemp !== 'number') continue;

		if (curTemp > max) max = curTemp;
		if (curTemp < min) min = curTemp;
	}
	console.log(max, min);
	return max - min;
};
const amplitudeNew = calcTempAmplitudeNew(temp1, temp2);
console.log(amplitudeNew);
