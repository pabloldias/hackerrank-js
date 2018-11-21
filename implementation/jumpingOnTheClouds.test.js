const jumpingOnTheClouds = require('./jumpingOnTheClouds');

test('sample testcase 0', () => {
    expect(jumpingOnTheClouds([0,0,1,0,0,1,0])).toBe(4);
});

test('sample testcase 1', () => {
    expect(jumpingOnTheClouds([0,0,0,0,1,0])).toBe(3);
});