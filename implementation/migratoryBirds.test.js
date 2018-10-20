const migratoryBirds = require('./migratoryBirds');

test('testcase 0', () => {
    expect(migratoryBirds([1, 4, 4, 4, 5, 3])).toBe(4);
});

test('testcase 1', () => {
    expect(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])).toBe(3);
});