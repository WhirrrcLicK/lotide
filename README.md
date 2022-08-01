# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @whirrr.click/lotide`

**Require it:**

`const _ = require('@whirrr.click/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: find if two arrays have equal values
* `assertEqual(...)`: find if values are equal
* `assertObjectsEqual(...)`: find it two objects equal values
* `countLetters(...)`: count the letters in an array
* `countOnly(...)`: count only the specified value
* `eqArrays(...)`: find if two arrays are exactly equal
* `eqObjects(...)`: find if two objects are equal
* `findKey(...)`: find the key of an objects
* `findKeyByValue(...)`: find the key by a specified value
* `head(...)`: find the first value in an array
* `letterPositions(...)`: list letters in a string and where they appear by key
* `index(...)`: index of all functions
* `map(...)`: creates a new array with the results of calling a provided function on each element
* `middle(...)`: find the middle values of an array
* `takeUntil(...)`: log an array until a chosen stopping point
* `without(...)`: return an array without a specified character