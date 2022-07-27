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

  const middle = function(arr) {
    const mid = Math.floor(arr.length / 2)
    result = []
      if (arr.length <= 2) {
        return result
      } else if (arr.length % 2 !== 0) {
        result = [arr[mid]]
      } else {
        result = arr.slice(arr[mid -2], arr[mid])
      }
      return result
      }

  assertArraysEqual(middle([1]), []) // => []
  assertArraysEqual(middle([1, 2]), []) // => []

  assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
  assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]

  assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4]