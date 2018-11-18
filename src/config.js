/**
 * A module that contains arguments for function module
 * @module src/config
 *
 * @author Nikola Ristić
 */

/**  Argument for function random(min, max) *
 *  @constant
 *  @type {number}
 */
const min = 2;
/**  Argument for function random(min, max)
 * @constant
 * @type {number}
 */
const max = 5;
module.exports.min = min;
module.exports.max = max;

/**  Arguments for function minIntegerFromArray(array)
 * @constant
 * @type {Array}
 */
const array = [1, 'etf', 'kgj', 4, 0, 2];
module.exports.array = array;

/**  Arguments for function minIntegerFromString(string)
 * @constant
 * @type {string}
 */
const string = 'Danas, 17tog Septembra, bice hladnije nego juce u 20h, 16og Septembra';
module.exports.string = string;

/**  Arguments for function concatStringsByLength(arrayOfStrings)
 * @constant
 * @type {string[]}
 */
const arrayOfStrings = ['abc', 'ac', 'bdca', 'edagas'];
/**  Arguments for function concatStringsByLength(arrayOfStrings)
 * @constant
 * @type {number}
 */
const type = 0;
module.exports.arrayOfStrings = arrayOfStrings;
module.exports.type = type;
