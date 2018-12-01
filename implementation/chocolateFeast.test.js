const chocolateFeast = require('./chocolateFeast');

test('sample testcase 0', () => {
    expect(chocolateFeast(10, 2, 5)).toBe(6);
    expect(chocolateFeast(12, 4, 4)).toBe(3);
    expect(chocolateFeast(6, 2, 2)).toBe(5);
});