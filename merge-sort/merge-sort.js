function mergeArrays(left, right) {
  var result = [];

  while(left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result.concat(left, right);
}

function mergeSort(array) {

  if(array.length <= 1) {
    return array;
  }

  var leftArray = array.filter(function(el, index) {
    return index % 2 !== 0;
  });
  var rightArray = array.filter(function(el, index) {
    return index % 2 === 0;
  });
  leftArray = mergeSort(leftArray);
  rightArray = mergeSort(rightArray);

  return mergeArrays(leftArray, rightArray);
}

module.exports = mergeSort;