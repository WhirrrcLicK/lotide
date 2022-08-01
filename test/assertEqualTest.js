// const assertEqual = require('../assertEqual')


// assertEqual("flood", "flood");
// assertEqual(1, 6);

const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it("returns true", () => {assert.strictEqual(assertEqual([1, 2, 3], [1, 2, 3], true));
  })
  it("returns false", () => {assert.strictEqual(assertEqual([1, 2, 6], [1, 5, 3], false)); 
  })
});