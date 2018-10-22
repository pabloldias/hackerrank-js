function countingValleys(steps, path) {
    const getValue = step => step === 'U' ? 1 : -1;
    return Array.from(path)
        .reduce((prev, curr) => {
            const lastValue = prev.length === 0 ? 0 : prev[prev.length - 1];
            prev.push(lastValue + getValue(curr));
            return prev;
        }, [])
        .reduce((prev, current, index, arr) => {
            const previous = index === 0 ? 0 : arr[index - 1];
            if (previous === 0 && current === -1) {
                return prev + 1;
            }
            return prev;
        }, 0);
}
module.exports = countingValleys;