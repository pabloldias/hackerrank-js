const drawingBook = require('./drawingBook');

test('testcase 0', () => {
    expect(drawingBook(6, 2)).toBe(1);
});

test('testcase 1', () => {
    expect(drawingBook(5, 4)).toBe(0);
});

test('testcase 2', () => {
    expect(drawingBook(6, 5)).toBe(1);
});

test('testcase 3', () => {
    expect(drawingBook(4, 4)).toBe(0);
});
