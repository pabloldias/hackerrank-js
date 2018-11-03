const viralAdvertising = require('./viralAdvertising');

test('testcase 0', () => {
    expect(viralAdvertising(1)).toBe(2);
});

test('testcase 1', () => {
    expect(viralAdvertising(2)).toBe(5);
});

test('testcase 2', () => {
    expect(viralAdvertising(3)).toBe(9);
});

test('testcase 3', () => {
    expect(viralAdvertising(4)).toBe(15);
});

test('testcase 4', () => {
    expect(viralAdvertising(5)).toBe(24);
});