const cutTheSticks = require('./cutTheSticks');

test('sample testcase 0', () => {
    expect(cutTheSticks([5,4,4,2,2,8])).toEqual([6,4,2,1]);
});

test('sample testcase 1', () => {
    expect(cutTheSticks([1,2,3,4,3,3,2,1])).toEqual([8,6,4,1]);
});