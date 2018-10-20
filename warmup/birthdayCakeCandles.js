function birthdayCakeCandles(ar) {
    let tallestCandle = 0;
    let candleCount = 0;
    ar.forEach(candle => {
        if (candle > tallestCandle) {
            tallestCandle = candle;
            candleCount = 1;
        } else if (candle === tallestCandle) {
            candleCount++;
        }
    });
    return candleCount
}
module.exports = birthdayCakeCandles;