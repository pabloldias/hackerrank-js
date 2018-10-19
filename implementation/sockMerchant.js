function sockMerchant(n, ar) {
    let socks = ar.reduce((prev, curr) => {
        prev[curr] = (prev[curr] || 0) + 1;
        return prev;
    }, {});

    let total = Object.keys(socks)
        .reduce((prev, curr) => prev + Math.floor(socks[curr] / 2), 0);

    return total;
}
module.exports = sockMerchant;