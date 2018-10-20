const betweenTwoSets = require('./betweenTwoSets');

test('testcase 0', () => {
    expect(betweenTwoSets([2, 4], [16, 32, 96])).toBe(3);
});

test('testcase 1', () => {
    expect(betweenTwoSets([3, 4], [24, 48])).toBe(2);
});