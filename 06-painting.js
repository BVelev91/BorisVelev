function painting (input) {
    let nailon = Number(input[0]);
    let pain = Number(input[1]);
    let razredite = Number(input[2]);
    let hoursForMaistori = Number(input[3]);
    
    let countNailonPrice = (nailon + 2) * 1.50;
    let countForPain = pain * (1+(10 /100)) * 14.50;
    let countRazreditel = razredite * 5.00;
    let priceForBag = 0.40;

    let countAllForMaterials = countNailonPrice + countForPain + countRazreditel + priceForBag;

    let countPriceForWork = hoursForMaistori * (countAllForMaterials * 0.30);

    let sumAll = countAllForMaterials + countPriceForWork;


    console.log(sumAll);


}
painting(["5 ","10 ","10 ","1 "]);