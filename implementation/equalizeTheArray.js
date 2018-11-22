function equalizeTheArray(arr) {
    const mininumDeletions = (deletions, num) => Math.min(deletions, arr.filter(item => item !== num).length);
    return [...new Set(arr)].reduce(mininumDeletions, arr.length);
}
module.exports = equalizeTheArray;