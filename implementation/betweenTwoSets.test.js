const betweenTwoSets = require('./betweenTwoSets');

test('testcase 0', () => {
    expect(betweenTwoSets([2, 4], [16, 32, 96])).toBe(3);
});

test('testcase 1', () => {
    expect(betweenTwoSets(
        [100, 99, 98, 97, 96, 95, 94, 93, 92, 91], 
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    )).toBe(0);
});

test('testcase 2', () => {
    expect(betweenTwoSets([3, 4], [24, 48])).toBe(2);
});