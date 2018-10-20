function appleAndOrange(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;
    const inRange = position => position >= s && position <= t;

    apples.forEach(apple => {
        if (inRange(a + apple)) {
            appleCount++;
        }
    });

    oranges.forEach(orange => {
        if (inRange(b + orange)) {
            orangeCount++;
        }
    });

    return appleCount.toString() + '\n' + orangeCount.toString();
}
module.exports = appleAndOrange;