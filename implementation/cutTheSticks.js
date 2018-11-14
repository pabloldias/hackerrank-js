function cutTheSticks(arr) {
    let result = [];
    let cutSticks = arr;
    const total = (prev, curr) => prev + curr;
    while (cutSticks.some(stick => stick > 0)) {
        const smallerStick = Math.min(...cutSticks.filter(stick => stick));
        const sticksDiscarded = cutSticks
            .map(stick => (stick - smallerStick) >= 0 ? 1 : 0)
            .reduce(total, 0);
        cutSticks = cutSticks.map(stick => (stick > 0) ? stick - smallerStick : 0);
        result.push(sticksDiscarded);
    }
    return result;
}
module.exports = cutTheSticks;