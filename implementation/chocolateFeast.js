function chocolateFeast(initialAmount, chocolateCost, freeBarCost) {
    let chocolateCount = Math.floor(initialAmount / chocolateCost);
    let wrappers = chocolateCount;
    while (wrappers >= freeBarCost) {
        const freeBars = Math.floor(wrappers / freeBarCost);
        chocolateCount += freeBars;
        wrappers = freeBars + (wrappers % freeBarCost);
    }
    return chocolateCount;
}
module.exports = chocolateFeast;