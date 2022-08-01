const assert = require('chai').assert;
const assertObjectsEqual = require('../assertObjectsEqual');
const eqObjects = require('../eqObjects');

describe("#assertObjectsEqual", () => {
  it("returns false", () => {assert.deepEqual(assertObjectsEqual(eqObjects(cd, cd2), false));
  })
  it("returns true", () => {assert.deepEqual(assertObjectsEqual(eqObjects(cd, dc), true))
  }); 
  it("returns true", () => {assert.deepEqual(eqObjects(ab, abc), false)
  });
  it("returns true", () => {assert.deepEqual(assertObjectsEqual(eqObjects(ab, ba), true))
  }); 
});



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

const abc = { a: "1", b: "2", c: "3" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

const cd2 = { c: "1", d: ["2", 3, 4] };