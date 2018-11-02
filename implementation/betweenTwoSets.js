function betweenTwoSets(a, b) {
    const maxA = a.reduce((prev, curr) => Math.max(prev, curr), 0);
    const minB = b.reduce((prev, curr) => Math.min(prev, curr), Number.MAX_VALUE);
    const conditionA = num => a.every(item => num % item === 0);
    const conditionB = num => b.every(item => item % num === 0);
    const total = minB - maxA + 1
    if (total < 0) {
        return 0;
    }
    return Array.from({length: total}, (v, k) => k + maxA)
        .filter(num => conditionA(num) && conditionB(num))
        .length;
}
module.exports = betweenTwoSets;