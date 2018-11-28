function beautifulTriplets(d, arr) {
    return arr.filter(num => arr.includes(num + d) && arr.includes(num + 2 * d)).length
}
module.exports = beautifulTriplets;