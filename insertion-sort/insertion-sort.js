function insertionSort(array) {
  for(var i = 1; i < array.length; i++){
    var j = i;
    while(j > 0 && array[j - 1] > array[j]){
      var tmp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = tmp;
      j--;
    }
  }
  return array;
}

module.exports = insertionSort;