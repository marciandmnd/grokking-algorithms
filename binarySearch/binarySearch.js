/**
 * Binary search of sorted numerical array.
 * Returns index of element being searched for. 
 * Returns -1 if element is not found
 * @param {Object[]} list - The list to be searched.
 * @param {number} el - The element to search for.
 */

function binarySearch(list, el) {
  // low and high keep track of portion of list being searched
  var low = 0;
  var high = list.length - 1;

  var mid;
  // While we haven't narrowed down to one element...
  while(low <= high) {
    // Check middle element
    mid = Math.ceil((low + high)/2);
    guess = list[mid];

    if(guess === el) {
      return mid;
    }

    if(guess > el) {
      high = mid - 1;
    }
    else {
      low = mid + 1;
    }
  }

  return -1;
}

module.exports = binarySearch;
