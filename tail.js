const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

const tail = function(arr) {
    return arr.slice(1);
  }

module.exports = tail;