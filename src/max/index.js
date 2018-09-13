/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {
  let max;
  for (let i = 0; i < arr.length; i++) {
    if(isElementFits(arr[i])) {
      max = arr[i];
      break;
    }
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if(arr[i] < arr[i+1] && isElementFits(arr[i]) && isElementFits(arr[i+1])){
      max = arr[i +1];
    }
  }
  return max;
};

function isElementFits(el) {
  return el !== Number.POSITIVE_INFINITY && el !== Number.NEGATIVE_INFINITY && typeof el === 'number' && !isNaN(el);
}

export default max;
