function viralAdvertising(days) {
    let shared = 5;
    let liked = 0;
    let cumulative = 0;
    for (let i = 1; i <= days; i++) {
        liked = Math.floor(shared / 2);
        cumulative += liked;
        shared = liked * 3;
    }
    return cumulative;
}
module.exports = viralAdvertising;