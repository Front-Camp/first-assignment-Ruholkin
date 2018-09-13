/**
 * This function should just reverse string
 *
 * @param {string} str - string of any length
 * @return {string} - reversed string
 * @example
 * turnMeBaby('hello');     // 'olleh'
 * turnMeBaby('Some text'); // 'txet emoS'
 */
const turnMeBaby = str => {
  if (typeof str === 'string') {
    let newStr = str.split('');
    newStr.reverse();
    newStr = newStr.join('');
    return newStr;
  } else {
    return Error("this is not a string");
  }
};

export default turnMeBaby;
