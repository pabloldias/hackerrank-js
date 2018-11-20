const repeatedString = require('./repeatedString');

test('testcase 0', () => {
    expect(repeatedString('aba', 10)).toBe(7);
});