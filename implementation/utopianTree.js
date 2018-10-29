function utopianTree(n) {
    const summerGrowth = prev => prev + 1;
    const springGrowth = prev => prev * 2;
    return [...Array(n + 1).keys()]
        .reduce((prev, curr) => {
            return curr % 2 === 0 ? summerGrowth(prev) : springGrowth(prev)
        }, 0)
}
module.exports = utopianTree;