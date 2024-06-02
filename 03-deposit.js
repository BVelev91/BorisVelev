function deposit (input) {
    let sum = Number(input[0]);
    let month = Number(input[1]);
    let lihva = Number(input[2]);

    let countLihva = sum * (lihva / 100);

    let countForMonth = countLihva / 12;

    let coutForAll = sum + month * countForMonth;


    console.log(coutForAll);

}
deposit(["2350","6 ","7 "]);