  const middle = function(arr) {
    const mid = Math.floor(arr.length / 2)
    result = []
      if (arr.length <= 2) {
        return result
      } else if (arr.length % 2 !== 0) {
        result = [arr[mid]]
      } else {
        result = arr.slice(arr[mid -2], arr[mid])
      }
      return result
      }

module.exports = middle;