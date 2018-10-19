const plusMinus = require('./plusMinus');

test('testcase 0', () => {
    expect(plusMinus([-4, 3, -9, 0, 4, 1])).toEqual([
        '0.500000',
        '0.333333',
        '0.166667',
    ]);
});

test('testcase 1', () => {
    expect(plusMinus([1, 2, 3, -1, -2, -3, 0, 0])).toEqual([
        '0.375000',
        '0.375000',
        '0.250000',
    ]);
});