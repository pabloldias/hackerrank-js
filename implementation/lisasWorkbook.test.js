const lisasWorkbook = require('./lisasWorkbook');

test('sample testcase 0', () => {
    expect(lisasWorkbook(5, 3, [4, 2, 6, 1, 10])).toBe(4);
});