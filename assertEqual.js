const assertEqual = function(actual, expected) {
  let result = "";
  if (actual !== expected) {
    result = console.log("💔 Assertion Failed: " + actual + " !== " + expected);
  } else if (actual === expected) {
    result = console.log("🖤 Assertion Passed: " + actual + " === " + expected);
  }
  return result;
};

assertEqual("flood", "flood");
assertEqual(1, 6);