const findDigits = require('./findDigits');

test('testcase 0', () => {
    expect(findDigits(12)).toBe(2);
    expect(findDigits(1012)).toBe(3);
});