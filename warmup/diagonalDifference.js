function diagonalDifference(arr) {
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;
    for (let i = 0; i < arr.length; i++) {
        primaryDiagonal += arr[i][i];
        secondaryDiagonal += arr[arr.length - i - 1][i];
    }
    return Math.abs(primaryDiagonal - secondaryDiagonal);
}
module.exports = diagonalDifference;