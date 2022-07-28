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

const letterPositions = function(sentence) {
   const letterKeys = {};
   for(let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (letterKeys.hasOwnProperty(sentence[i])){
         letterKeys[sentence[i]] = letterKeys[sentence[i]].concat(i);
      } else {
         letterKeys[sentence[i]] = [i];
      };
   }
  };
   return letterKeys;
};

assertArraysEqual(letterPositions('hello').e, [1])
console.log(letterPositions('lighthouse in the house'));