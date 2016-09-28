var bubbleSort = require('./bubble-sort/bubble-sort.js');
var insertionSort = require('./insertion-sort/insertion-sort.js');
var mergeSort = require('./merge-sort/merge-sort.js');
var quickSort = require('./qsort/qsort.js');
var selectionSort = require('./selection-sort/selection-sort.js');

console.log('bubble sort testing');
console.time('bubble sort where n=8');
console.log(bubbleSort([8, 5, 1, 4, 2, 7, 3, 6]));
console.timeEnd('bubble sort where n=8');

console.log('insertion sort testing');
console.time('insertion sort where n=8');
console.log(insertionSort([8, 5, 1, 4, 2, 7, 3, 6]));
console.timeEnd('insertion sort where n=8');

console.log('mergesort testing');
console.time('mergesort where n=8');
console.log(mergeSort([8, 5, 1, 4, 2, 7, 3, 6]));
console.timeEnd('mergesort where n=8');

console.log('quicksort testing');
console.time('quicksort where n=8');
console.log(quickSort([8, 5, 1, 4, 2, 7, 3, 6]));
console.timeEnd('quicksort where n=8');

console.log('selection sort testing');
console.time('selection sort where n=8');
console.log(selectionSort([8, 5, 1, 4, 2, 7, 3, 6]));
console.timeEnd('selection sort where n=8');

console.time('bubble sort where n=64');
bubbleSort([ 64,82,61,65,70,87,56,36,45,12,26,81,76,91,5,4,37,40,22,16,
                91,93,93,70,21,80,64,89,60,97,22,24,68,100,94,68,26,65,19,
                45,88,70,71,30,15,48,80,78,54,25,34,24,19,24,62,3,68,47,77,
                87,26,2,23,96 ]);
console.timeEnd('bubble sort where n=64');

console.time('insertion sort where n=64');
insertionSort([ 64,82,61,65,70,87,56,36,45,12,26,81,76,91,5,4,37,40,22,16,
                91,93,93,70,21,80,64,89,60,97,22,24,68,100,94,68,26,65,19,
                45,88,70,71,30,15,48,80,78,54,25,34,24,19,24,62,3,68,47,77,
                87,26,2,23,96 ]);
console.timeEnd('insertion sort where n=64');

console.time('mergesort where n=64');
mergeSort([ 64,82,61,65,70,87,56,36,45,12,26,81,76,91,5,4,37,40,22,16,
                91,93,93,70,21,80,64,89,60,97,22,24,68,100,94,68,26,65,19,
                45,88,70,71,30,15,48,80,78,54,25,34,24,19,24,62,3,68,47,77,
                87,26,2,23,96 ]);
console.timeEnd('mergesort where n=64');

console.time('quicksort where n=64');
quickSort([ 64,82,61,65,70,87,56,36,45,12,26,81,76,91,5,4,37,40,22,16,
                91,93,93,70,21,80,64,89,60,97,22,24,68,100,94,68,26,65,19,
                45,88,70,71,30,15,48,80,78,54,25,34,24,19,24,62,3,68,47,77,
                87,26,2,23,96 ]);
console.timeEnd('quicksort where n=64');

console.time('selection sort where n=64');
selectionSort([ 64,82,61,65,70,87,56,36,45,12,26,81,76,91,5,4,37,40,22,16,
                91,93,93,70,21,80,64,89,60,97,22,24,68,100,94,68,26,65,19,
                45,88,70,71,30,15,48,80,78,54,25,34,24,19,24,62,3,68,47,77,
                87,26,2,23,96 ]);
console.timeEnd('selection sort where n=64');