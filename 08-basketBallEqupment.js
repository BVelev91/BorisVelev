function basketBallEqupment (input) {

    let yearTax = Number(input[0]);

    let shoes = 0.60 * yearTax;
    let equpment = 0.80 * shoes;
    let priceForBall = equpment / 4;
    let accessories = priceForBall / 5;

    let sumAll = yearTax + shoes + equpment + priceForBall + accessories;



    console.log(sumAll);

}
basketBallEqupment(["550 "]);