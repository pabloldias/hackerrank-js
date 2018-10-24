const electronicsShop = require('./electronicsShop');

test('testcase 0', () => {
    expect(electronicsShop([3, 1], [5, 2, 8], 10)).toBe(9);
});

test('testcase 1', () => {
    expect(electronicsShop([4], [5], 5)).toBe(-1);
});