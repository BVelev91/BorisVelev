function aquarium(input) {

    let L = Number(input[0]);
    let W = Number(input[1]);
    let H = Number(input[2]);
    let procent = Number(input[3]);

    let sumAquarim = L * W * H;

    let convertCm = sumAquarim / 1000;
    let convertProcent = procent / 100;

    let sumLiters = convertCm * (1 - convertProcent);

    console.log(sumLiters);


}
aquarium(["105 ","77 ","89 ","18.5 "]);