const assertEqual = function(actual, expected) {
  let result = "";
  if (actual !== expected) {
    result = console.log(`💔 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    result = console.log(`🖤 Assertion Passed: ${actual} === ${expected}`);
  }
  return result;
};

const tail = function(arr) {
  return arr.slice[1];
};

console.log(assertEqual(tail(["Hello"])));