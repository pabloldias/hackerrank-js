function modifiedKaprekarNumbers(p, q) {
    const kaprekar = (prev, curr) => {
        const square = Math.pow(curr, 2).toString();
        const part1 = square.substring(0, square.length / 2);
        const part2 = square.substring(square.length / 2);
        if (Number(part1) + Number(part2) === curr) {
            prev.push(curr);
        };
        return prev;
    };

    const numbers = [...Array(q - p + 1).keys()]
        .map(num => num + p)
        .reduce(kaprekar, []);

    if (numbers.length > 0) {
        return numbers.join(' ');
    } else {
        return 'INVALID RANGE'
    }
}
module.exports = modifiedKaprekarNumbers;