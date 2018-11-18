/**
 * @fileOverview Main function for calling other functions and printing their results
 *
 * @author Nikola Ristić
 *
 * @requires ./config
 * @requires ./functions
 */

const functions = require('./functions.js');
const config = require('./config.js');


function main() {
	try {
		const randomNumber = functions.random(config.min, config.max);
		const minIntegerFromArray = functions.minIntegerFromArray(config.array);
		const minIntegerFromString = functions.minIntegerFromString(config.string);
		const sortedStrings = functions.concatStringsByLength(config.arrayOfStrings, config.type);

		console.log(`Random Number between ${config.min} and ${config.max}: ${randomNumber}, 
Minimum Integer from ${config.array}: ${minIntegerFromArray},
Minimum Integer from ${config.string}: ${minIntegerFromString},
Sorted string based on array ${config.arrayOfStrings}: ${sortedStrings}`);
	} catch (e) {
		console.log(e);
	}
}

main();
