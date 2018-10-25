const pickingNumbers = require('./pickingNumbers');

test('testcase 0', () => {
    expect(pickingNumbers([4, 6, 5, 3, 3, 1])).toBe(3);
});

test('testcase 1', () => {
    expect(pickingNumbers([1, 2, 2, 3, 1, 2])).toBe(5);
});

test('testcase 2', () => {
    expect(pickingNumbers(Array(100).fill(66))).toBe(100);
});

test('testcase 7', () => {
    expect(pickingNumbers([
        4, 97, 5, 97, 97, 4, 97, 4, 97, 97, 97, 97, 4, 4, 5, 5, 97, 5, 97, 99, 
        4, 97, 5, 97, 97, 97, 5, 5, 97, 4, 5, 97, 97, 5, 97, 4, 97, 5, 4, 4, 
        97, 5, 5, 5, 4, 97, 97, 4, 97, 5, 4, 4, 97, 97, 97, 5, 5, 97, 4, 97, 
        97, 5, 4, 97, 97, 4, 97, 97, 97, 5, 4, 4, 97, 4, 4, 97, 5, 97, 97, 97, 
        97, 4, 97, 5, 97, 5, 4, 97, 4, 5, 97, 97, 5, 97, 5, 97, 5, 97, 97, 97
    ])).toBe(50);
});