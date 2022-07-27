
const assertEqual = function(actual, expected) {
  let result = "";
  if (actual !== expected) {
    result = console.log(`💔 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    result = console.log(`🖤 Assertion Passed: ${actual} === ${expected}`);
  }
  return result;
};

const eqArrays = function(arr1, arr2) {
  for (let x = 0; x < arr1.length; x++) {
  if (arr1[x] !== arr2[x]) {
    result = false
} else if (arr1[x] === arr2[x]) {
    result = true
  }
  }
  return result
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
assertEqual(eqArrays([1, 2, 6], [1, 5, 3]), true)

