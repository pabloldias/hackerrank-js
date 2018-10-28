const theHurdleRace = require('./theHurdleRace');

test('testcase 0', () => {
    expect(theHurdleRace(4, [1, 6, 3, 5, 2])).toBe(2);
});

test('testcase 1', () => {
    expect(theHurdleRace(7, [2, 5, 4, 5, 2])).toBe(0);
});