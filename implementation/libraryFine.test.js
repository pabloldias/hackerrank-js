const libraryFine = require('./libraryFine');

test('sample', () => {
    expect(libraryFine(9, 6, 2015, 6, 6, 2015)).toBe(45);
});

test('testcase 0', () => {
    expect(libraryFine(9, 6, 2015, 6, 6, 2016)).toBe(0);
});

test('testcase 5', () => {
    expect(libraryFine(2, 7, 1014, 1, 1, 1015)).toBe(0);
});