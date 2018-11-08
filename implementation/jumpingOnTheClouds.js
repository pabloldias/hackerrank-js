function jumpingOnTheClouds(clouds, jump) {
    const thunderhead = cloud => clouds[cloud] === 1 ? 2 : 0;

    const landingClouds = num => {
        const pos = ((num * jump) + jump);
        if (pos < clouds.length) {
            return pos;
        }
        return 0;
    }
    
    const jumps = Math.ceil(clouds.length / jump);

    return [...Array(jumps).keys()]
        .map(landingClouds)
        .reduce((prev, curr) => {
            return prev - 1 - thunderhead(curr)
        }, 100);
}
module.exports = jumpingOnTheClouds;