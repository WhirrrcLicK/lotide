const assertEqual = function(actual, expected) {
  if (actual === expected) {
  console.log(`🖤 Assertion Passed: ${actual} === ${expected}`);
  } else {
  console.log(`💔 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

  const assertArraysEqual = function(actual, expected) {
      if (eqArrays(actual, expected)) {
        console.log(`🖤 Assertion Passed: ${actual} === ${expected}`);
        } else {
        console.log(`💔 Assertion Failed: ${actual} !== ${expected}`);
        }
      };

assertArraysEqual([1, 2, 3], [1, 2, 3])
assertArraysEqual([1, 2, 6], [1, 5, 3])

module.exports = assertArraysEqual;