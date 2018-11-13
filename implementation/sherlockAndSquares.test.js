const sherlockAndSquares = require('./sherlockAndSquares');

test('testcase 00', () => {
    expect(sherlockAndSquares(3, 9)).toBe(2);
});

test('testcase 01', () => {
    expect(sherlockAndSquares(17, 24)).toBe(0);
});

test('testcase 10', () => {
    expect(sherlockAndSquares(35, 70)).toBe(3);
});

test('testcase 11', () => {
    expect(sherlockAndSquares(100, 1000)).toBe(22);
});