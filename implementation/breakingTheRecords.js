function breakingTheRecords(scores) {
    let bestRecord = scores[0];
    let worstRecord = scores[0];
    let bestRecordBroken = 0;
    let worstRecordBroken = 0;

    scores.forEach(score => {
        if (score > bestRecord) {
            bestRecord = score;
            bestRecordBroken++;
        }
        if (score < worstRecord) {
            worstRecord = score;
            worstRecordBroken++;
        }
    });

    return [bestRecordBroken, worstRecordBroken];
}
module.exports = breakingTheRecords;