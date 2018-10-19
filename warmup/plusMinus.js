function plusMinus(arr) {
    const size = arr.length;
    const positives = arr.filter(num => num > 0).length;
    const negatives = arr.filter(num => num < 0).length;
    const zeroes = arr.filter(num => num === 0).length;   
    return [
        (positives / size).toFixed(6),
        (negatives / size).toFixed(6),
        (zeroes / size).toFixed(6),
    ];
}
module.exports = plusMinus;