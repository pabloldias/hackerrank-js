const kangaroo = require('./kangaroo');

test('testcase 0', () => {
    expect(kangaroo(0, 3, 4, 2)).toBe('YES');
});

test('testcase 1', () => {
    expect(kangaroo(0, 2, 5, 3)).toBe('NO');
});