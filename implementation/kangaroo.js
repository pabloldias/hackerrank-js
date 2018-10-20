function kangaroo(x1, v1, x2, v2) {
    if (v1 - v2 === 0) {
        return 'NO';
    }
    const jumps = (x2 - x1) / (v1 - v2);
    if (jumps >= 0 && Number.isInteger(jumps)) {
        return 'YES';
    }
    return 'NO';
}
module.exports = kangaroo;