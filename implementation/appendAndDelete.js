function appendAndDelete(initial, desired, moves) {
    let str = initial;
    while (str !== '') {
        if (desired.indexOf(str) === 0) {
            const count = (initial.length - str.length) + (desired.length - str.length);
            if (count === moves) {
                return 'Yes';
            }
        }
        str = str.slice(0, str.length - 1);
    }
    if ((str === '') && ((initial.length + desired.length) <= moves)) {
        return 'Yes';
    }
    return 'No';
}
module.exports = appendAndDelete;