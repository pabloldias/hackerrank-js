const serviceLane = require('./serviceLane');

test('sample testcase 0', () => {
    expect(serviceLane(
        [2, 3, 1, 2, 3, 2, 3, 3],
        [
            [0, 3],
            [4, 6],
            [6, 7],
            [3, 5],
            [0, 7],
        ]
    )).toEqual([
        1,
        2,
        3,
        2,
        1,
    ]);
});