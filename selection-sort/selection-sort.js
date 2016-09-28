function selectionSort(array) {
  var i, j;

  for(j = 0; j < (array.length - 1); j++) {
    //assume the minimum is element 0, then search for a smaller element
    var indexOfMin = j;
    for(i = j+1; i < array.length; i++){
      //if this element is less than minimum, it is the new minimum
      if(array[i] < array[indexOfMin]) {
        indexOfMin = i;
      }
    }
    if(indexOfMin != j) {
      var tmp = array[indexOfMin];
      array[indexOfMin] = array[j];
      array[j] = tmp;
    }
  }
  return array;
}

module.exports = selectionSort;