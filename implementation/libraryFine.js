function libraryFine(dayReturned, monthReturned, yearReturned, dayDue, monthDue, yearDue) {
    if (yearReturned > yearDue) {
        return 10000
    }
    if (yearReturned === yearDue) {
        if (monthReturned > monthDue) {
            return 500 * (monthReturned - monthDue);
        }
        if (monthReturned === monthDue && dayReturned > dayDue) {
            return 15 * (dayReturned - dayDue);
        }
    } 
    return 0;
}
module.exports = libraryFine;