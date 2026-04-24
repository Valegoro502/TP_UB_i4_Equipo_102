const { add, subtract, multiply } = require('./calculator');

test('add(1, 2) should return 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtract(5, 2) should return 3', () => {
  expect(subtract(5, 2)).toBe(3);
});

test('multiply(3, 4) should return 12', () => {
  expect(multiply(3, 4)).toBe(12);
});
