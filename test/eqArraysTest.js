// const eqArrays = require('../eqArrays');
// const assertEqual = require('../assertEqual');

// assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 4]), true)
// assertEqual(eqArrays([1, 2, 6], [1, 5, 3]), true)


const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual')

describe("#eqArrays", () => {
  it("returns true", () => {assert.deepEqual(assertEqual(eqArrays([1, 2, 6], [1, 5, 3]), true));
  })
  it("returns false", () => {assert.deepEqual(assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 4]), true))
  })
});