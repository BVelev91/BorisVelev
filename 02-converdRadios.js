function radiansToDegree (input) {
    let radian = Number(input[0]);
    let deggree = radian * 180 / Math.PI;
    console.log(deggree);

}
radiansToDegree(["6.2832"]);