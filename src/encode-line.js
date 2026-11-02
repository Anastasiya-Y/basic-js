const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  if (!str) return '';

  const chars = str.split('');
  const result = [];
  let count = 1;

  for (let i = 0; i < chars.length; i += 1) {
    if (chars[i] === chars[i + 1]) {
      count += 1;
    } else {
      if (count === 1) {
        result.push(chars[i]);
      } else {
        result.push(count + chars[i]);
      }
      count = 1;
    }
  }

  return result.join('');
}

module.exports = {
  encodeLine
};
