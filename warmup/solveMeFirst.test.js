const sum = require('./solveMeFirst');

test('adds 2 + 3 to equal 5', () => {
  expect(sum(2, 3)).toBe(5);
});

test('adds 100 + 1000 to equal 1100', () => {
  expect(sum(100, 1000)).toBe(1100);
});