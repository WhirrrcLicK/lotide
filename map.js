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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);