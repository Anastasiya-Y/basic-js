const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes = 1;
  let separator = '+';
  let addition = undefined;
  let additionRepeatTimes = 1;
  let additionSeparator = '|';
  
  str = String(str);
  
  if (options) {
    if (options.repeatTimes !== undefined) {
    repeatTimes = options.repeatTimes;
    }
    if (options.separator !== undefined) {
      separator = options.separator;
    }
    if (options.addition !== undefined) {
      addition = String(options.addition);
    }
    if (options.additionRepeatTimes !== undefined) {
      additionRepeatTimes = options.additionRepeatTimes;
    }
    if (options.additionSeparator !== undefined) {
      additionSeparator = options.additionSeparator;
    }
  }

  let additionStr = [];
  
  if (addition !== undefined) {
    for (let i = 0; i < additionRepeatTimes; i++) {
      additionStr.push(addition);
    }
    additionStr = additionStr.join(additionSeparator);
  }
  
  let newArr = [];
  
  for (let i = 0; i < repeatTimes; i++) {
    newArr.push(str + additionStr);
  }

  let newStr = newArr.join(separator);
  
  return newStr;
}

module.exports = {
  repeater
};
