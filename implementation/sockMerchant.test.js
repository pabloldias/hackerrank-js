const sockMerchant = require('./sockMerchant');

test('testcase 0', () => {
    expect(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])).toBe(3);
});

test('testcase 1', () => {
    expect(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3])).toBe(4);
});