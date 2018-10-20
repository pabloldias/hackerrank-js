function migratoryBirds(arr) {
    let counts = arr.reduce((prev, curr) => {
        prev[curr] = (prev[curr] || 0) + 1;
        return prev;
    }, []);
    let highest = 1;
    for (let i = 2; i <= 5; i++) {
        if (counts[i] > counts[highest]) {
            highest = i;
        }
    };
    return highest;
}
module.exports = migratoryBirds;