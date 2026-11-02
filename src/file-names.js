const { NotImplementedError } = require('../lib');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const usedNames = [];
  const result = [];

  for (let i = 0; i < names.length; i += 1) {
    const name = names[i];
    let newName = name;

    if (usedNames.indexOf(newName) !== -1) {
      let k = 1;

      while (usedNames.indexOf(`${name}(${k})`) !== -1) {
        k += 1;
      }

      newName = `${name}(${k})`;
    }

    usedNames.push(newName);
    result.push(newName);
  }

  return result;
}

module.exports = {
  renameFiles
};
