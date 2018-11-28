function minimumDistances(a) {
    return a.reduce((minimum, curr, index) => { 
        const nextIndex = a.findIndex((n, i) => n === curr && i > index);
        if (nextIndex >= 0) {
            const distance = nextIndex - index;
            if (minimum >= 0) {
                return Math.min(minimum, distance);
            } else {
                return distance;
            }
        } else {
            return minimum;
        }
    }, -1)
}
module.exports = minimumDistances;