const flatlandSpaceStation = require('./flatlandSpaceStation');

test('sample testcase 0', () => {
    expect(flatlandSpaceStation(5, [0, 4])).toBe(2);
});

test('sample testcase 1', () => {
    expect(flatlandSpaceStation(6, [0, 1, 2, 4, 3, 5])).toBe(0);
});