const breakingTheRecords = require('./breakingTheRecords');

test('testcase 0', () => {
    expect(breakingTheRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])).toEqual([2, 4]);
});

test('testcase 1', () => {
    expect(breakingTheRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])).toEqual([4, 0]);
});