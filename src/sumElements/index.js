/**
 *  This function should return sum of
 *  all numbers and strings which can be converted to numbers
 *  in passed array
 *
 * @param {Array<number|string>} arr - this is an array of numbers or strings
 * @return {number} - sum of all numbers of array
 * @example
 * sumElements([1, 2, 3]);          // 6
 * sumElements(['1', 'hi', 3]);     // 4
 * sumElements([Infinity, NaN, 1]); // 1
 */
const sumElements = arr => {
  let newArr = arr.filter(el => isElementFits(el));
  newArr = newArr.reduce((accum, currentValue) => accum + parseInt(currentValue, 10));
  return newArr;
};

function isElementFits(el) {
  el = parseInt(el, 10);
  return el !== Number.POSITIVE_INFINITY && el !== Number.NEGATIVE_INFINITY && typeof el === 'number' && !isNaN(el);
}

export default sumElements;
