function repeatedString(s, n) {
    const repetitions = Math.floor(n / s.length);
    const countIn = str => Array.from(str).filter(item => item === 'a').length;
    const rest = s.substring(0, n % s.length);
    return (countIn(s) * repetitions) + countIn(rest);
}
module.exports = repeatedString;