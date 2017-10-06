const quickSort = require('./quickSort');

let array = [5, 3, 6, 2, 10];

test('Returns sorted array', () => {
  expect(quickSort(array)).toEqual([2,3,5,6,10]);
});
