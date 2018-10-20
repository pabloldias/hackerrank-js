const appleAndOrange = require('./appleAndOrange');

test('testcase 0', () => {
    expect(appleAndOrange(7, 11, 5, 15, [-2, 2, 1], [5, -6])).toBe('1\n1');
});