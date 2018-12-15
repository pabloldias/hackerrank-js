function serviceLane(widths, cases) {
    return cases.map(segment => {
        return widths.filter((v, k) => k >= segment[0] && k <= segment[1])
            .reduce((prev, cur) => Math.min(prev, cur), Number.MAX_SAFE_INTEGER);
    });
}
module.exports = serviceLane;