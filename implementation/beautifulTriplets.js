function beautifulTriplets(d, arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] - arr[i] === d) {
                for (let k = j + 1; k < arr.length; k++) {
                    if (arr[k] - arr[j] === d) {
                        count++;
                    }
                }    
            }
        }    
    }

    return count;
}
module.exports = beautifulTriplets;