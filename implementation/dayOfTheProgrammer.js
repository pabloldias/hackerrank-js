function divisibleByFour(year) {
    return year % 4 === 0;
}

function isJulianLeapYear(year) {
    return year < 1918 && divisibleByFour(year);
}

function isGregorianLeapYear(year) {
    return year > 1918
        && ((year % 400 === 0)
            || (divisibleByFour(year) && (year % 100 !== 0)));
}

function daysInFebruary(year) {
    if (isJulianLeapYear(year)) {
        return 29;
    } else if (year === 1918) {
        return 15;
    } else if (isGregorianLeapYear(year)) {
        return 29;
    }
    return 28;
}

function format(value) {
    return (value).toString().padStart(2, '0')
}

// Complete the dayOfProgrammer function below.
function dayOfTheProgrammer(year) {
    const daysInMonth = [
        31,
        daysInFebruary(Number.parseInt(year)),
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31,
    ];

    let day = 0;
    let month = 0;
    let total = 0;

    for (let days of daysInMonth) {
        total += days;
        if (total < 256) {
            month++;
        } else {
            month++;
            day = days - (total - 256);
            break;
        }
    }

    return format(day) + '.' + format(month) + '.' + year;
}
module.exports = dayOfTheProgrammer;