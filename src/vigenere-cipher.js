const { NotImplementedError } = require('../lib');

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
  constructor(direct = true) {
    this.direct = direct;
  }

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
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const upperString = string.toUpperCase();
    const upperKey = key.toUpperCase();

    let keyIndex = 0;

    for (let i = 0; i < upperString.length; i++) {
      const char = upperString[i];
      const charIndex = alphabet.indexOf(char);

      if (charIndex === -1) {
        result += char;
        continue;
      }

      const keyChar = upperKey[keyIndex % upperKey.length];
      const keyCharIndex = alphabet.indexOf(keyChar);

      result += matrix[charIndex][keyCharIndex];
      keyIndex++;
    }

    return this.direct ? result : result.split('').reverse().join('');
  }

  decrypt(string, key) {
    if (!string || !key) {
      throw new Error(`Incorrect arguments!`);
    }
    let result = '';
    const matrix = this.getMatrix();
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const upperString = string.toUpperCase();
    const upperKey = key.toUpperCase();

    let keyIndex = 0;

    for (let i = 0; i < upperString.length; i++) {
      const char = upperString[i];
      const charIndex = alphabet.indexOf(char);

      if (charIndex === -1) {
        result += char;
        continue;
      }

      const keyChar = upperKey[keyIndex % upperKey.length];
      const keyCharIndex = alphabet.indexOf(keyChar);

      const rowIndex = matrix.findIndex(row => row[keyCharIndex] === char);
      result += alphabet[rowIndex];

      keyIndex++;
    }

    return this.direct ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
