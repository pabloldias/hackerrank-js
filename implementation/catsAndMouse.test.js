const catsAndMouse = require('./catsAndMouse');

test('testcase 0', () => {
    expect(catsAndMouse(1, 2, 3)).toBe('Cat B');
});

test('testcase 1', () => {
    expect(catsAndMouse(1, 3, 2)).toBe('Mouse C');
});