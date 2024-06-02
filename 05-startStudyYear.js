function studyYear (input) {
    let pencil = Number(input[0]) * 5.80;
    let marker = Number(input[1]) * 7.20;
    let detergents = Number(input[2]) * 1.20;
    let discount = Number(input[3]) / 100;

    let priceForAllMaterials = pencil + marker + detergents;

    let sumAllWithDiscount = priceForAllMaterials-(priceForAllMaterials * discount);

    console.log(sumAllWithDiscount);

}
studyYear(["4 ","2 ","5 ","13 "]);