const timeConversion = require('./timeConversion');

test('testcase 0', () => {
    expect(timeConversion('07:05:45PM')).toBe('19:05:45');
});