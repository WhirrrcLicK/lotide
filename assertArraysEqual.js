
const assertEqual = function(actual, expected) {
  let result = "";
  if (actual !== expected) {
    result = console.log(`💔 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    result = console.log(`🖤 Assertion Passed: ${actual} === ${expected}`);
  }
  return result;
};

let compare = ""
const eqArrays = function(arr1, arr2) {
  for (let x = 0; x < arr1.length; x++) {
  if (arr1[x] !== arr2[x]) {
    compare = false
} else if (arr1[x] === arr2[x]) {
    compare = true
  }
  }
  return compare
}

  const assertArraysEqual = function() {
    assertEqual(compare, true)
    if (compare === false) {
      equal = console.log('Arrays are not equal.')
    } else if (compare === true) {
      equal = console.log('Arrays are equal!')
    }
    return equal
    }

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
assertArraysEqual(eqArrays([1, 2, 6], [1, 5, 3]), true)