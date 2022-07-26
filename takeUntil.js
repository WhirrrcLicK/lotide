const takeUntil = function(array, callback) {
  var results = []
  for (x = 0; x < array.length; x++) {
    if (callback(array[x]) !== true) {
      results.push(array[x])
    } else {
      break;
    }
  }
  return results
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const data = function(x) {
  x === ","
}