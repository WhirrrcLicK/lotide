// const assertArraysEqual = require('../assertArraysEqual');
// const tail = require('../tail');
// const assertEqual = require('../assertEqual');


// assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
// // Test Case: Check the original array 
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

const assert = require('chai').assert;
const tail = require('../tail');
const assertEqual = require('../assertEqual');

describe("#tail", () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  tail(words);
  it("returns true", () => {assert.strictEqual(assertEqual(words.length, 3))
  })
});