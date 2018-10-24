function catsAndMouse(catA, catB, mouseC) {
    const distanceA = Math.abs(catA - mouseC);
    const distanceB = Math.abs(catB - mouseC);
    if (distanceA === distanceB) {
        return 'Mouse C';
    } else if (distanceA > distanceB) {
        return 'Cat B';
    } else {
        return 'Cat A';
    }
}
module.exports = catsAndMouse;