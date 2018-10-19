function compareTheTriplets(a, b) {
    let scores = [0, 0];
    for (let i = 0; i <= 2; i++) {
        if (a[i] > b[i]) {
            scores[0]++;
        } else if (b[i] > a[i]) {
            scores[1]++;
        }
    }
    return scores
}
module.exports = compareTheTriplets;