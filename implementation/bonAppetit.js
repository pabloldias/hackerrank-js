function bonAppetit(bill, k, b) {
    const total = bill.filter((value, index) => index !== k)
        .reduce((prev, curr) => prev + curr, 0);
    const annaCharge = total / 2;
    if (annaCharge === b) {
        return 'Bon Appetit';
    } else {
        return (b - annaCharge).toString();
    }
}
module.exports = bonAppetit;