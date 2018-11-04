function saveThePrisoner(prisoners, sweets, firstChair) {
    return ((firstChair + sweets - 2) % prisoners) + 1;
}
module.exports = saveThePrisoner;