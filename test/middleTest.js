// const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');

// assertArraysEqual(middle([1]), []) // => []
// assertArraysEqual(middle([1, 2]), []) // => []

// assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]

// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4]

const assert = require('chai').assert;
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

describe("#middle", () => {
  it("returns true", () => {assert.strictEqual(assertArraysEqual(middle([1, 2]), []))}
  )
  it("returns false", () => {assert.strictEqual(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]))
  })
  it("returns false", () => {assert.strictEqual(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
  )})
}); 