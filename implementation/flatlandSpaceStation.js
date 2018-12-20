function flatlandSpaceStation(numberCities, citiesWithSpaceStation) {
    let maximumDistance = 0;
    for (let city = 0; city < numberCities; city++) {
        if (!citiesWithSpaceStation.includes(city)) {
            let nearestDistance = Number.MAX_SAFE_INTEGER;
            for (let station of citiesWithSpaceStation) {
                const distance = Math.abs(station - city);
                nearestDistance = Math.min(nearestDistance, distance);
            }
            maximumDistance = Math.max(maximumDistance, nearestDistance);
        }
    }
    return maximumDistance;
}
module.exports = flatlandSpaceStation;