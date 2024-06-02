function literatura (input) {
    let allStranici = Number(input[0]);
    let straniciNaChas = Number(input[1]);
    let days = Number(input[2]);

    let countStranici = allStranici / straniciNaChas;
    let countAll = countStranici / days;

    console.log(countAll);


}
literatura(["432 ","15 ","4 "]);