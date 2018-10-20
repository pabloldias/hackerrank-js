const staircase = require('./staircase');

test('testcase 0', () => {
    expect(staircase(6)).toBe('     #\n    ##\n   ###\n  ####\n #####\n######');
});

test('testcase 1', () => {
    expect(staircase(1)).toBe('#');
});

test('testcase 2', () => {
    expect(staircase(2)).toBe(' #\n##');
});