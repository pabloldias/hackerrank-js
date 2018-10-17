const simpleArraySum = require('./simpleArraySum');

test('sum arrays elements', () => {
    expect(simpleArraySum([1, 2, 3, 4, 10, 11]))
        .toBe(31);
});