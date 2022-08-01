const assertEqual = require('./assertEqual');

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let x = 0; x < arr1.length; x++) {
  if (arr1[x] !== arr2[x]) {
    return false 
  }
}
  return true
  }


assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), true)
assertEqual(eqArrays([1, 2, 6], [1, 5, 3]), true)

module.exports = eqArrays;