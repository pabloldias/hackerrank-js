function beautifulDaysAtTheMovies(dayStart, dayEnd, divisor) {

    const beautifulDay = day => {
        const reverse = parseInt(Array.from(day.toString()).reverse().join(''));
        return Math.abs(day - reverse) % divisor === 0;
    };

    return [...Array(dayEnd - dayStart + 1).keys()]
        .map(day => day + dayStart)
        .filter(beautifulDay)
        .length;
        
}
module.exports = beautifulDaysAtTheMovies;