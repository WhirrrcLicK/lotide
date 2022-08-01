// const assertArraysEqual = require('../assertArraysEqual.js');

// assertArraysEqual([1, 2, 3], [1, 2, 3])
// assertArraysEqual([1, 2, 6], [1, 5, 3])

const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe("#assertArraysEqual", () => {
  it("returns true", () => {assert.deepEqual(assertArraysEqual([1, 2, 3], [1, 2, 3], true));
  })
  it("returns false", () => {assert.deepEqual(assertArraysEqual([1, 2, 6], [1, 5, 3, 4], false)); 
  })
});