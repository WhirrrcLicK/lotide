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

const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1)
  let keys2 = Object.keys(object2)
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const keys of keys1) {
    if (Array.isArray(object1) === true && Array.isArray(object2) === true){
      if (eqArrays(object1, object2) === true) {
        return true
      }
    } else {
    if (object1[keys] !== object2[keys]) {
      return false;
    }
  }
}
  return true
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

module.exports = eqObjects;