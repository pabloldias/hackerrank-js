const appendAndDelete = require('./appendAndDelete');

test('testcase 0', () => {
    expect(appendAndDelete('hackerhappy', 'hackerrank', 9)).toBe('Yes');
});

test('testcase 1', () => {
    expect(appendAndDelete('aba', 'aba', 7)).toBe('Yes');
});

test('testcase 2', () => {
    expect(appendAndDelete('ashley', 'ash', 2)).toBe('No');
});

test('testcase 3', () => {
    expect(appendAndDelete('aaaaaaaaaa', 'aaaaa', 7)).toBe('Yes');
});

test('testcase 4', () => {
    expect(appendAndDelete(
        'asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv', 
        'bsdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv', 
        100)
    ).toBe('No');
});