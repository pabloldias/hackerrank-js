const birthdayChocolate = require('./birthdayChocolate');

test('testcase 0', () => {
    expect(birthdayChocolate([1, 2, 1, 3, 2], 3, 2)).toBe(2);
});

test('testcase 1', () => {
    expect(birthdayChocolate([1, 1, 1, 1, 1, 1], 3, 2)).toBe(0);
});

test('testcase 2', () => {
    expect(birthdayChocolate([4], 4, 1)).toBe(1);
});