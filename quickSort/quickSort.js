/**
 * Sort a numerical array via quick sort algorithm.
 * Returns the sorted array. 
 * @param {Object[]} array - The array to sort.
 */
function quickSort(array) {
  if(array.length < 2) {
    return array;
  }
  else {
    let pivot = array[0];
    let less = [];
    let greater = [];
    for(var i = 1; i<array.length; i++) {
      let el = array[i];
      el > pivot ? greater.push(el) : less.push(el);
    }
    console.log(less);
    return quickSort(less).concat([pivot]).concat(quickSort(greater));
  }
}

module.exports = quickSort;
