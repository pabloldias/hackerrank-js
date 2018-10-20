const bonAppetit = require('./bonAppetit');

test('testcase 0', () => {
    expect(bonAppetit([3, 10, 2, 9], 1, 12)).toBe('5');
});

test('testcase 1', () => {
    expect(bonAppetit([3, 10, 2, 9], 1, 7)).toBe('Bon Appetit');
});