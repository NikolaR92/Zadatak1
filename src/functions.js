/**
 * A module that contains functions needed for a program
 * @module src/functions
 */

/** Function that returns a random number between min and max
 *
 * @param {number} min
 * @param {number} max
 * @returns {number} Random number between min and max
 */
function random(min, max) {
	try {
		if (!Number.isFinite(min) || !Number.isFinite(max)) {
			throw new TypeError('Arguments are wrong type');
		}

		return Math.floor(Math.random() * (max - min + 1)) + min;
	} catch (error) {
		return `Error at function random: ${error}`;
	}
}

/** Function that returns minimun value from array of Integers
 *
 * @param {Array.<Integer>}
 *
 * @return {Integer} Minimum value from array
 */
function minIntegerFromArray(array) {
	let len = array.length;
	try {
		if (len < 6) {
			throw new RangeError('Length of a array must be at least 6');
		}
		let min = Infinity;
		/**	Going through each element and array and checking if element is lower then min
		 *	complexity of while loop is O(4*n), other way to do this function is to sort array and take first element
		 * but complexity of best sorting algorithm like merge sort or quicke sort is O(n*log n)
		 */
		while (len) {
			if (Number.isFinite(array[len]) && array[len] < min) {
				min = array[len];
			}
			len -= 1;
		}

		if (min === Infinity) {
			return false;
		}
		return min;
	} catch (error) {
		return `Error at function minIntegerFromArray: ${error}`;
	}
}

/** Function finds minimum Integer number in string.
 * We first match numbers with regular expresions, then when we
 * get array of numbers we find number with minimum value.
 *
 * @param {string} string
 *
 * @returns {Integer} Minimum value inside a string
 */
function minIntegerFromString(string) {
	let len = string.length;
	try {
		if (len < 10) {
			throw new RangeError('Length of a string must be at least 10');
		}

		const reNumbers = /\d+/g;
		const array = string.match(reNumbers);
		const convertdArray = array.map(Number);

		let min = Infinity;
		while (len) {
			if (convertdArray[len] < min) {
				min = array[len];
			}
			len -= 1;
		}

		if (min === Infinity) {
			return false;
		}
		return min;
	} catch (error) {
		return `Error at function minIntegerFromString: ${error}`;
	}
}

/**
 * A number with values 0 or 1.
 * @typedef {(0|1)} SortingOrder
 */


/** Function sort strings based on length and then concated
 * depending on second arument type. 0 for a ascending order, 1 for descending order.
 *
 * @param {Array.<string>} arrayOfStrings
 * @param {SortingOrder} type
 *
 * @returns {string} Concated strings that are ordered by length
 */
function concatStringsByLength(arrayOfStrings, type) {
	/** First we check if arguments are of good type and range
	 *then we sort arrays based on type and then we concat strings
	 */
	try {
		let sortedArray;
		if (arrayOfStrings.some(a => Number.isFinite(a))) {
			throw new TypeError('Invalid first argument, array must be made of strings');
		} else if (type === 0) {
			sortedArray = arrayOfStrings.sort((a, b) => a.length - b.length);
		} else if (type === 1) {
			sortedArray = arrayOfStrings.sort((a, b) => b.length - a.length);
		} else {
			throw new RangeError('Invalid second argument, allowed values are 0 or 1');
		}
		return sortedArray.reduce((a, b) => a.concat(b));
	} catch (error) {
		return `Error at function concatStringsByLength: ${error}`;
	}
}

module.exports.random = random;
module.exports.minIntegerFromArray = minIntegerFromArray;
module.exports.minIntegerFromString = minIntegerFromString;
module.exports.concatStringsByLength = concatStringsByLength;
