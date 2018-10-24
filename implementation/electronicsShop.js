function electronicsShop(keyboards, drives, budget) {
    let total = -1;
    keyboards.forEach(keyboard => {
        drives.forEach(drive => {
            let price = keyboard + drive;
            if (price > total && price <= budget) {
                total = price;
            }
        });
    });
    return total;
}
module.exports = electronicsShop;