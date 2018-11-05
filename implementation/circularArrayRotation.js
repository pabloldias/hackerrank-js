function circularArrayRotation(arr, rotations, queries) {
    const pos = rotations % arr.length;
    const slicePos = arr.length - pos;
    const rotated = arr.slice(slicePos).concat(arr.slice(0, slicePos));
    return queries.map(query => rotated[query]);
}
module.exports = circularArrayRotation;