function quickSort(array) {

  if(array.length <= 1) {
    return array;
  }

  var pivot = array.shift();
  var leftArray = array.filter(function(el) {
    return el < pivot;
  });
  var rightArray = array.filter(function(el) {
    return el >= pivot;
  });

  return quickSort(leftArray).concat(pivot, quickSort(rightArray));

}

module.exports = quickSort;