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


const without = function (source, itemsToRemove) {
  const result = []
  for (let x = 0; x < source.length; x++) {
    if (!itemsToRemove.includes(source[x])) {
      result.push(source[x])
    }
  }
  return result
}
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]) // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]) // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));