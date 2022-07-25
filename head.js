const assertEqual = function(actual, expected) {
  let result = "";
  if (actual !== expected) {
    result = console.log(`💔 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    result = console.log(`🖤 Assertion Passed: ${actual} === ${expected}`);
  }
  return result;
};

  const head = function(arr1) {
return arr1[0]
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");