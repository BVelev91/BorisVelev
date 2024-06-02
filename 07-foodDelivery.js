function deliveryFood (input) {
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let veganMenu = Number(input[2]);

    let chickenMenuPrice = 10.35 * chickenMenu;
    let fishMenuPrice = 12.40 * fishMenu;
    let veganMenuPrice = 8.15 * veganMenu;

    let sumAllMenuPrice = chickenMenuPrice + fishMenuPrice + veganMenuPrice;

    let cakePrice = 0.20 * sumAllMenuPrice;
    let priceForDelivery = 2.50;

    let sumAll = sumAllMenuPrice + cakePrice + priceForDelivery;

    console.log(sumAll);



}
deliveryFood(["9 ","2 ","6 "]);