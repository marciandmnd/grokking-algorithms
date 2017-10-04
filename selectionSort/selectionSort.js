/**
 * Find minimum value in numeric array.
 * Returns index of smallest element. 
 * @param {Object[]} arr - The array in which to find the smallest element.
 */
function findMin(arr) {
  let min = arr[0];
  let minIndex = 0;
  for(let i=0; i<arr.length; i++) {
    if(arr[i] < min) {
      min = arr[i];
      minIndex = i;
    }
  }
  return minIndex;
}

/**
 * Sort a numerical array via selection sort algorithm.
 * Returns the sorted array. 
 * @param {Object[]} arr - The array to sort.
 */
function selectionSort(arr) {
  let sorted = [];
  let length = arr.length;
  for(let i=0; i<length; i++) {
    let min = findMin(arr);
    sorted.push(arr.splice(min,1)[0]);
  }
  return sorted;
}

module.exports = selectionSort;
