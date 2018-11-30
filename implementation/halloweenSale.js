function halloweenSale(initialPrice, dollarsLess, minimumCost, wallet) {
    let games = 0;
    let money = wallet;
    let price = initialPrice;
    while (money >= minimumCost && price <= money) {
        money -= price;
        price = Math.max(price - dollarsLess, minimumCost);
        games++;
    }
    return games;
}
module.exports = halloweenSale;