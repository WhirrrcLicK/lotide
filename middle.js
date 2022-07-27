let compare = ""
const eqArrays = function(arr1, arr2) {
  for (let x = 0; x < arr1.length; x++) {
  if (arr1[x] !== arr2[x]) {
    compare = false
} else if (arr1[x] === arr2[x]) {
    compare = true
  }
  }
  return compare
}

  const assertArraysEqual = function() {
    assertEqual(compare, true)
    if (compare === false) {
      equal = console.log('Arrays are not equal.')
    } else if (compare === true) {
      equal = console.log('Arrays are equal!')
    }
    return equal
    }