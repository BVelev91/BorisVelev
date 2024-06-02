function architeckt(input) {
    let name = (input[0]);
    let projeckt = Number(input[1]);
    let hourPerProject = 3;
    let sum = projeckt * hourPerProject;
    console.log(`The architect ${name} will need ${sum} hours to complete ${projeckt} project/s.`);

}
architeckt(["George ","4"]);