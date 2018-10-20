function divisibleSumPairs(n, k, ar) {
    return ar.reduce((prev, curr, index) => {
        return prev + ar.slice(index + 1)
            .filter(num => (curr + num) % k === 0)
            .length;
    }, 0);
}
module.exports = divisibleSumPairs;