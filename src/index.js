const functions = require('./functions.js');
const config = require('./config.js');

console.log(functions.random(config.min, config.max));

console.log(functions.minIntegerFromArray(config.array));

console.log(functions.minIntegerFromString(config.string));

console.log(functions.concatStringsByLength(config.arrayOfStrings, config.type));
