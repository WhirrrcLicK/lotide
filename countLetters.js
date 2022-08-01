const assertEqual = function(actual, expected) {
  if (actual === expected) {
  console.log(`🖤 Assertion Passed: ${actual} === ${expected}`);
  } else {
  console.log(`💔 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//const countLetters = function(string, lettersToCount) {
  //result = {}
  //string = string.split(' ').join('').split('')
  //  lettersToCount = [...new Set(string)]
  // console.log(string)
  // console.log(lettersToCount)
  // for (x = 0; x < string.length; x++) {
  //   if (string[x] === lettersToCount) {
  //   }

  // }
//   console.log(result)
//   return result

const countLetters = function(sentence) {
  const finalSentence = {}

  for (const letter of sentence) {
    if (letter !== " ") {
      if (finalSentence[letter]) {
        finalSentence[letter] += 1
      } else {
        finalSentence[letter] = 1
      }
    }
  }
  console.log(finalSentence)
}