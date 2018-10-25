function pickingNumbers(arr) {
    const totals = arr.reduce((prev, curr) => {
        prev[curr] = ((prev[curr] || 0) + 1);
        return prev;
    }, {});
    let maxNumber = 0;
    Object.keys(totals).sort().forEach((value, index, arr) => {
        maxNumber = Math.max(maxNumber, totals[value]);
        if ((index + 1 < arr.length) && (Math.abs(value - arr[index + 1]) === 1)) {
            maxNumber = Math.max(maxNumber, totals[value] + totals[arr[index + 1]]);
        }
    })
    return maxNumber;
}
module.exports = pickingNumbers;