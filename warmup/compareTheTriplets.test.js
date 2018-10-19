const compareTheTriplets = require('./compareTheTriplets');

test('Alice and Bob have the same score', () => {
    expect(compareTheTriplets([5, 6, 7], [3, 6, 10]))
        .toEqual([1, 1]);
});

test('Alice gets a better score than Bob', () => {
    expect(compareTheTriplets([17, 28, 30], [99, 16, 8]))
        .toEqual([2, 1]);
});