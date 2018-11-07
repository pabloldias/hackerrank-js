function sequenceEquation(numbers) {
    const p = num => numbers.indexOf(num) + 1;
    return [...numbers.keys()].map((v, k) => k + 1).map(p).map(p);
}
module.exports = sequenceEquation;