const miniMaxSum = require('./miniMaxSum');

test('testcase 0', () => {
    expect(miniMaxSum([1, 2, 3, 4, 5])).toBe('10 14');
});

test('testcase 1', () => {
    expect(miniMaxSum([7, 69, 2, 221, 8974])).toBe('299 9271');
});