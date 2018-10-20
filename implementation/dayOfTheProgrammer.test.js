const dayOfTheProgrammer = require('./dayOfTheProgrammer');

test('testcase 0', () => {
    expect(dayOfTheProgrammer('2017')).toBe('13.09.2017');
});

test('testcase 1', () => {
    expect(dayOfTheProgrammer('2016')).toBe('12.09.2016');
});

test('testcase 2', () => {
    expect(dayOfTheProgrammer('1800')).toBe('12.09.1800');
});