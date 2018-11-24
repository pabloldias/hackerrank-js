const acmTeam = require('./acmIcpcTeam');

test('testcase 0', () => {
    expect(acmTeam([
        '10101',
        '11100',
        '11010',
        '00101',
    ])).toEqual([5, 2]);
});