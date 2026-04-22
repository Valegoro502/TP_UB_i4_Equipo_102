const { add, subtract } = require('./calculator');

test('Alfa: add(1, 2) should return 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('Gamma: subtract(5, 2) should return 3', () => {
  expect(subtract(5, 2)).toBe(3);
});

test('Gamma: subtract(10, 5) should return 5', () => {
  expect(subtract(10, 5)).toBe(5);
});
