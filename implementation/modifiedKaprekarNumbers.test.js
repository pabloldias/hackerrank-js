const modifiedKaprekarNumbers = require('./modifiedKaprekarNumbers');

test('sample testcase 0', () => {
    expect(modifiedKaprekarNumbers(1, 100)).toBe('1 9 45 55 99');
});

test('sample testcase 1', () => {
    expect(modifiedKaprekarNumbers(100, 300)).toBe('297');
});