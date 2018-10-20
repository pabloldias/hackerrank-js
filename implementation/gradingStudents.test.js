const gradingStudents = require('./gradingStudents');

test('testcase 0', () => {
    expect(gradingStudents([73, 67, 38, 33])).toEqual([75, 67, 40, 33]);
});