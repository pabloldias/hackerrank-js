const divisibleSumPairs = require('./divisibleSumPairs');

test('testcase 0', () => {
    expect(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])).toBe(5);
});