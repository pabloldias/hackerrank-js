function simpleArraySum(ar) {
    return ar.reduce((prev, curr) => prev + curr, 0);
}
module.exports = simpleArraySum;