const minimumDistances = require('./minimumDistances');

test('testcase 0', () => {
    expect(minimumDistances([7, 1, 3, 4, 1, 7])).toBe(3);
});