console.log("Welcome to MyTicTacToe")
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");


let win = false;
let turn = "X";


const changeTurn = () => {
    return turn === "X" ? "O" : "X";
}

const checkWin = () => {
    let boxText = document.getElementsByClassName("text");
    let wins = [
        [0, 1, 2, 0, 90, 0],
        [3, 4, 5, 0, 255, 0],
        [6, 7, 8, 0, 410, 0],
        [0, 3, 6, -160, 250, 90],
        [1, 4, 7, 0, 250, 90],
        [2, 5, 8, 160, 250, 90],
        [0, 4, 8, 0, 250, 45],
        [2, 4, 6, 0, 250, -45]
    ];
    wins.forEach(e => {
        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[1]].innerText === boxText[e[2]].innerText) && (boxText[e[0]].innerText != '')) {
            document.querySelector(".content2").innerText = `${turn} wins!!!`
            win = true;
            document.querySelector(".line").setAttribute("style",`visibility:visible; translate: ${e[3]}px ${e[4]}px; rotate:${e[5]}deg; transition: 0.3s ease-in-out;`);
            gameover.play();
            document.querySelector(".won").getElementsByTagName("img")[0].setAttribute("style", "width:200px");
        }
    })
}

//Game Logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector(".text");
    element.addEventListener('click', () => {
        if (boxText.innerText == '' && !win) {
            let text = document.querySelector(".content2");
            boxText.innerText = turn;
            checkWin();
            if (win != true) {
                turn = changeTurn();
                audioTurn.play();
                text.innerText = `Turn for ${turn}`;
            }

        }
    })
});


// Reset Logic
let reset = document.querySelector("#reset");
reset.addEventListener('click', () => {
    Array.from(boxes).forEach(element => {
        let text = element.querySelector(".text");
        text.innerText = '';
    })
    document.querySelector(".line").setAttribute("style",`visibility:hidden;`);
    document.querySelector(".won").getElementsByTagName("img")[0].setAttribute("style", "width:0px");
    document.querySelector(".content2").innerText = "Turn for X";
    turn = "X";
    win = false;
})