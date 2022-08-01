const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), true)
assertEqual(eqArrays([1, 2, 6], [1, 5, 3]), true)