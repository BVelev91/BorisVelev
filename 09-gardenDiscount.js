function garden(input) {
    let kvmetere = Number(input[0]);
    let priceForKvMeter = 7.61 * kvmetere;
    let discount = 0.18 * priceForKvMeter;
    let sumAll = priceForKvMeter - discount;



    console.log(`The final price is: ${sumAll} lv.`);
    console.log(`The discount is: ${discount} lv.`);

}
garden(["150"]);