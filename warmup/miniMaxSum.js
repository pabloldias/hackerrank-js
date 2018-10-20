function miniMaxSum(arr) {
    const sorted = arr.sort(),
        filterMin = (val, index) => index < arr.length - 1,
        filterMax = (val, index) => index > 0,
        reduceSum = (prev, curr) => prev + curr
          
    const min = sorted.filter(filterMin).reduce(reduceSum, 0);
    const max = sorted.filter(filterMax).reduce(reduceSum, 0);

    return `${min} ${max}`;
}
module.exports = miniMaxSum;