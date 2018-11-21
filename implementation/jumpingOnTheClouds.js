function jumpingOnTheClouds(clouds) {
    let jumpCount = 0;
    let cloud = 0;
    const canJumpBy = num => ((cloud + num) < clouds.length) && (clouds[cloud + num] === 0);
    while (cloud < clouds.length - 1) {
        if (canJumpBy(2)) {
            cloud = cloud + 2;
        } else if (canJumpBy(1)) {
            cloud = cloud + 1;
        }
        jumpCount++;
    }
    return jumpCount;
}
module.exports = jumpingOnTheClouds;