function saveThePrisoner(prisoners, sweets, firstChair) {
    if (prisoners === 1) {
        return firstChair;
    }
    const chair = ((firstChair + sweets) % prisoners) - 1;
    if (chair <= 0) {
        return prisoners + chair;
    } 
    return chair;
}
module.exports = saveThePrisoner;