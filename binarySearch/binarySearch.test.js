const binarySearch = require('./binarySearch');

let array = [2,3,6,9];

test('Returns index of searched for element', () => {
  expect(binarySearch(array, 3)).toBe(1);
  expect(binarySearch(array, 9)).toBe(3);
});

test('Returns -1 for an element not found', () => {
  expect(binarySearch(array, 100)).toBe(-1);
  expect(binarySearch(array, -10)).toBe(-1);
});
