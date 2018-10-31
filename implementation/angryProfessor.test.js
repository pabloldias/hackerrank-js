const angryProfessor = require('./angryProfessor');

test('testcase 0', () => {
    expect(angryProfessor(3, [-1, -3, 4, 2])).toBe('YES');
});

test('testcase 1', () => {
    expect(angryProfessor(2, [0, -1, 2, 1])).toBe('NO');
});