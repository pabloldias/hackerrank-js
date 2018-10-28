function theHurdleRace(maxHeight, heights) {
    return heights.reduce((prev, curr) => {
        if (curr > maxHeight) {
            return Math.max(prev, curr - maxHeight);
        }
        return prev;
    }, 0);
}
module.exports = theHurdleRace;