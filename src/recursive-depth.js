const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;

    if (!Array.isArray(arr)) {
      return 0;
    }

    for (let i = 0; i < arr.length; i++) {
      depth = Math.max(depth, this.calculateDepth(arr[i]))
    }

    return 1 + depth;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
