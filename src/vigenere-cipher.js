const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  getMatrix() {
    let alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    let arr = [];
    
    for (let i = 0; i < alphabet.length; i++) {
      let subArr = [];
      for (let j = 0; j < alphabet.length; j++) {
        subArr.push(alphabet[j]);
      }
      arr.push(subArr);
      const letter = alphabet.shift();
      alphabet.push(letter);
    }
    
    return arr;
  }

  encrypt(string, key) {
    if (!string || !key) {
      throw new Error(`Incorrect arguments!`);
    }
    let result = '';
    const matrix = this.getMatrix();

    let newKey = '';
    newKey = key.padStart(string.length, key);

    for (let i = 0; i < string.length; i++) {
      let strIndex = matrix.indexOf(string[i]);
      let keyIndex = matrix.indexOf(key[i]);

      result += matrix[strIndex][keyIndex];
    }

    return result;
  }
  decrypt() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};
