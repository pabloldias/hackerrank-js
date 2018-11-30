const halloweenSale = require('./halloweenSale');

test('testcase 0', () => {
    expect(halloweenSale(20, 3, 6, 80)).toBe(6);
});

test('testcase 3', () => {
    expect(halloweenSale(100, 1, 1, 99)).toBe(0);
});

test('testcase 7', () => {
    expect(halloweenSale(100, 19, 1, 180)).toBe(1);
});