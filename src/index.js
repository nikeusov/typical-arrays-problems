
exports.min = function min (array) {
  if (arguments.length === 0 || array.length === 0) {
    return 0;
  }

  let min = array[0];

  array.forEach((el) => {if (el < min) min = el })

  return min;
  }

exports.max = function max (array) {
  if (arguments.length === 0 || array.length === 0) {
    return 0;
  }

    let max = array[0];

    array.forEach((el) => {if (el > max) max = el })

    return max;
}

exports.avg = function avg (array) {
  if (arguments.length === 0 || array.length === 0) {
    return 0;
  }
  
  let summ = 0;

  for (let i = 0; i < array.length; i++) {
    summ += array[i];
  }

  return summ / array.length;
}
