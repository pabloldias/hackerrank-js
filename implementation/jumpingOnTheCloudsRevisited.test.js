const jumpingOnTheClouds = require('./jumpingOnTheCloudsRevisited');

test('testcase 0', () => {
    expect(jumpingOnTheClouds([0,0,1,0,0,1,1,0], 2)).toBe(92);
});

test('testcase 1', () => {
    expect(jumpingOnTheClouds([1,1,1,0,1,1,0,0,0,0], 3)).toBe(94);
});