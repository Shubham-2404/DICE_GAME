let dice = document.querySelectorAll("span");
let cube1 = dice[0];
let cube2 = dice[1];
let cube3 = dice[2];
let cube4 = dice[3];

console.log(cube4);

function randomNumber() {
    let result = Math.trunc(Math.random() * 6 + 1)

    return result
}

let button = document.querySelector("#btn")

button.addEventListener("click", () => {
    let playercube1 = randomNumber();
    let playercube2 = randomNumber();

    let computercube1 = randomNumber();
    let computercube2 = randomNumber();

    //Player-1 Cube

    if (playercube1 == 1) {
        cube1.innerHTML = `<img src="./Images/D1.png" alt="">`
    } else if (playercube1 == 2) {
        cube1.innerHTML = `<img src="./Images/D2.png" alt="">`
    } else if (playercube1 == 3) {
        cube1.innerHTML = `<img src="./Images/D3.png" alt="">`
    } else if (playercube1 == 4) {
        cube1.innerHTML = `<img src="./Images/D4.png" alt="">`
    } else if (playercube1 == 5) {
        cube1.innerHTML = `<img src="./Images/D5.png" alt="">`
    } else if (playercube1 == 6) {
        cube1.innerHTML = `<img src="./Images/D6.png" alt="">`
    }

    //Player-2 cube

    if (playercube2 == 1) {
        cube2.innerHTML = `<img src="./Images/D1.png" alt="">`
    } else if (playercube2 == 2) {
        cube2.innerHTML = `<img src="./Images/D2.png" alt="">`
    } else if (playercube2 == 3) {
        cube2.innerHTML = `<img src="./Images/D3.png" alt="">`
    } else if (playercube2 == 4) {
        cube2.innerHTML = `<img src="./Images/D4.png" alt="">`
    } else if (playercube2 == 5) {
        cube2.innerHTML = `<img src="./Images/D5.png" alt="">`
    } else if (playercube2 == 6) {
        cube2.innerHTML = `<img src="./Images/D6.png" alt="">`
    }

    // computer-1 cube

    if (computercube1 == 1) {
        cube3.innerHTML = `<img src="./Images/D1.png" alt="">`
    } else if (computercube1 == 2) {
        cube3.innerHTML = `<img src="./Images/D2.png" alt="">`
    } else if (computercube1 == 3) {
        cube3.innerHTML = `<img src="./Images/D3.png" alt="">`
    } else if (computercube1 == 4) {
        cube3.innerHTML = `<img src="./Images/D4.png" alt="">`
    } else if (computercube1 == 5) {
        cube3.innerHTML = `<img src="./Images/D5.png" alt="">`
    } else if (computercube1 == 6) {
        cube3.innerHTML = `<img src="./Images/D6.png" alt="">`
    }

    //computer-2 cube

    if (computercube2 == 1) {
        cube4.innerHTML = `<img src="./Images/D1.png" alt="">`
    } else if (computercube2 == 2) {
        cube4.innerHTML = `<img src="./Images/D2.png" alt="">`
    } else if (computercube2 == 3) {
        cube4.innerHTML = `<img src="./Images/D3.png" alt="">`
    } else if (computercube2 == 4) {
        cube4.innerHTML = `<img src="./Images/D4.png" alt="">`
    } else if (computercube2 == 5) {
        cube4.innerHTML = `<img src="./Images/D5.png" alt="">`
    } else if (computercube2 == 6) {
        cube4.innerHTML = `<img src="./Images/D6.png" alt="">`
    }



    // cube3.innerHTML = computercube1;
    // cube4.innerHTML = computercube2;


    playerscore = playercube1 + playercube2;
    computerscore = computercube1 + computercube2;

    let div = document.querySelectorAll(".total")[0];
    div.innerHTML = `Total : ${playerscore}`;

    console.log(div);

    let div2 = document.querySelectorAll(".total")[1];
    div2.innerHTML = `Total : ${computerscore}`;

    let result = document.querySelector(".result");

    if (playerscore > computerscore) {
        result.innerHTML = "Congratulation you won the game."
    } else if (playerscore < computerscore) {
        result.innerHTML = "Oops!, You lost the game."
    } else {
        result.innerHTML = "Are tie ho gaya!!!"
    }

})