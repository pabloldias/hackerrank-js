function findDigits(num) {
    return Array.from(num.toString())
        .filter(digit => num % Number(digit) === 0)
        .length;
}
module.exports = findDigits;