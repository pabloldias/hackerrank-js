function timeConversion(s) {
    const timeFormat = s.substring(8, 10);
    let hour = parseInt(s.substring(0, 2));
    if (hour === 12 && timeFormat === 'AM') {
        hour = 0;
    }
    if (hour !== 12 && timeFormat === 'PM') {
        hour += 12;
    }
    return (hour).toString().padStart(2, '0') + s.substring(2, 8);
}
module.exports = timeConversion;