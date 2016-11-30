# Sorting Algorithms

[View on GitHub Pages](https://spacetoastcoasttocoast.github.io/sorting-visualizer/)

#####Relative performance
A file `allSortsOfSorts.js` is provided with the project which uses `console.time()` to demonstrate performance differences between these methods for datasets of length `n = 8` and length `n = 64`.

###Bubble sort
A simple but inefficient algorithm that compares each element to its next neighbor and swaps their position if they are out of order. Bubble sort is fast and efficient if a list is already sorted or nearly sorted, running at O(n) in the best case; generally it is inefficient as it has no way to avoid repeating checks on elements that have been processed already, and runs at O(n^2).
#####Implementaion
```
function bubblesort(arr)
while !sorted
  for el in arr
    if arr[el] < arr[el - 1]
      swap arr[el] and arr[el - 1]
      swaps = swaps + 1
    end if
  end for
  if swaps = 0 {sorted = true}
end while
```
###Quicksort
A recursive divide-and-conquer algorithm that subdivides an array into single-element subsections, using a "pivot point" against which the other elements are compared. Numbers lesser than the pivot are placed in a subsection to its left, and numbers greater than or equal to the pivot are placed in a subsection to its right. When all subsections have been divided and sorted, they are joined back together in their proper order. Quicksort works most efficiently when the pivot point is close to the median value of the dataset, performing close to O(n log n); in the case where the pivot is always the smallest value, it performs at O(n^2) due to not being able to delegate anything to the left side partition.
#####Implementation
```
recursive function qsort(arr)
if arr.length <= 1 {return arr};
pivot = 1st element in arr
left, right = empty arrays
for each el in arr
  if el < pivot
  add el to left
  else
  add el to right
end for
result = concatenate pivot to the end of qsort(left)
concatenate qsort(right) to result
return result
```
###Merge sort
Another recursive divide-and-conquer algorithm that subdivides an array into equally-sized partitions, whose first elements are compared against each other at each step and swapped if they are out of order. Merge sort also performs efficiently, with both worst-case and best-case performing at O(n log n).
#####Implementation
```
function mergeSort(arr)
if arr.length <= 1 {return};
left = all elements with odd indices
right = all elements with even indices
mergeSort(left);
mergeSort(right);
result = empty array
while left and right are not empty
  if left(0) <= right(0) remove the first element of left and place at end of result
  else remove the first element of right and place it at end of result
end while
concatenate any remaining elements in both left and right to the end of result
return result
```
###Insertion sort
Insertion sort iterates through a dataset, partially sorting it as it goes along. When it finds a node that is in the wrong order relative to the value before it, it pulls out that node and inserts it in properly sorted order in the partially sorted section. As it keeps the values that have already been processed towards the head end of the array, it can be used for data that is streamed in while it is still being processed. Insertion sort performs more efficiently than the above methods in small datasets, reaching O(n) performance, but it performs at O(n^2) on the average case and thus is impractical for large datasets.
#####Implementation
```
for i = 1 to arr.length - 1
j = i
  while j > 0 and arr(j - 1) > arr(j)
    swap arr(j) and arr(j - 1)
    j = j - 1
  end while
end for
```
###Selection sort
Selection sort builds a list of sorted items at the end of the dataset as it goes along. When it finds a value smaller than the lowest value in the sorted section, it places it at the start of the sorted section and narrows its search by one index, so as not to process the already sorted data again. Selection sort performs poorly, consistently at O(n^2), but has minimal space complexity and is ideal for cases like flash memory where write cycles must be minimized.
#####Implementation
```
for j = 0 && j < arr.length - 1 && j++
  indexOfMinimum = j;
  for i = j+1 && i < arr.length && i++
    if arr[i] < arr[indexOfMinimum] {indexOfMinimum = i}
  end for
  if(indexOfMin != j) {swap arr[j] and arr[indexOfMin]}
end for
```