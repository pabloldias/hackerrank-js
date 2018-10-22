const countingValleys = require('./countingValleys');

test('testcase 0', () => {
    expect(countingValleys(8, 'UDDDUDUU')).toBe(1);
});