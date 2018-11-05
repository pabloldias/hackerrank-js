const circularArrayRotation = require('./circularArrayRotation');

test('testcase 0', () => {
    expect(circularArrayRotation([1,2,3], 2, [0,1,2])).toEqual([2,3,1]);
});