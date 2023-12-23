const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] === '--discard-next') {
      newArr.push(undefined);
      continue;
    }
    if (arr[i] === '--double-prev') {
      newArr.push(newArr[i - 1]);
      continue;
    }
    if (arr[i] === '--double-next') {
      newArr.push(arr[i + 1]);
      continue;
    }
    if (arr[i] === '--discard-prev') {
      newArr.pop();
      continue;
    }
    if (arr[i] === '--discard-next') {
      newArr.push(undefined);
      continue;
    }
  newArr.push(arr[i]);
  }

  const resultArr = newArr.filter((number) => number !== undefined);

  return resultArr;
}

module.exports = {
  transform
};
