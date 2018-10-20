function betweenTwoSets(a, b) {

    let x = [];

    for (let i = 1; i <= 100; i++) {
        let restoZero = true;

        a.forEach(item => {
            if (i % item !== 0) {
                restoZero = false;
            }
        });

        b.forEach(item => {
            if (item % i !== 0) {
                restoZero = false;
            }
        });

        if (restoZero) {
            x.push(i);
        }

    }

    return x.length;

}
module.exports = betweenTwoSets;