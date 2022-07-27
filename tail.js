const assertEqual = function(actual, expected) {
  if (actual === expected) {
  console.log(`🖤 Assertion Passed: ${actual} === ${expected}`);
  } else {
  console.log(`💔 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
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

const tail = function(arr) {
    return arr.slice(1);
  }

assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!