function pickingNumbers(arr) {
    const totals = arr.reduce((prev, curr) => {
        prev[curr] = (prev[curr] || 0) + 1;
        return prev;
    }, {});
    let maxNumber = 0;
    Object.keys(totals).sort().forEach((value, index, arr) => {
        total = totals[value];
        if ((index + 1 < arr.length) && (Math.abs(value - arr[index + 1]) === 1)) {
            total += totals[arr[index + 1]];
        }
        maxNumber = Math.max(maxNumber, total);
    })
    return maxNumber;
}
module.exports = pickingNumbers;