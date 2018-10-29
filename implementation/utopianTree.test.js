const utopianTree = require('./utopianTree');

test('testcase 0', () => {
    expect(utopianTree(0)).toBe(1);
});

test('testcase 1', () => {
    expect(utopianTree(1)).toBe(2);
});

test('testcase 2', () => {
    expect(utopianTree(4)).toBe(7);
});