function zooShop(input) {
    let foodForDog = Number(input[0]);
    let foodForCat = Number(input[1]);

    let priceForDog = 2.50 * foodForDog;
    let priceForCat = 4 * foodForCat;

    let sumAll = priceForCat + priceForDog;

    console.log(sumAll);

}
zooShop(["13","9"]);