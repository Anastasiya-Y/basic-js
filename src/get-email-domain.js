const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let arr = email.split('');
  let index = arr.lastIndexOf('@');

  let newArr = arr.slice(++index);
  let domain = newArr.join('');
  return domain;
}

module.exports = {
  getEmailDomain
};
