console.log("👋 WELCOME TO TIC-TAC-TOE 👋");

let turnAudio = new Audio('turn.mp3');
let gameoverAudio = new Audio('gameover.mp3');
let turn = "X";
let gameOver = false;

// Alternate turns
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
};

// Check for winner
const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    
    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) &&
            (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) &&
            (boxtexts[e[0]].innerText !== '')) {
            document.getElementsByClassName("TURN")[0].innerText = boxtexts[e[0]].innerText + " WON";
            document.getElementById('partyEmoji').classList.remove('hidden');
            gameoverAudio.play();
            gameOver = true;
        }
    });
};

// Check for draw
const checkDraw = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    if (Array.from(boxtexts).every(e => e.innerText !== '')) {
        document.getElementsByClassName("TURN")[0].innerText = "IT'S A DRAW";
        document.getElementById('emoji').classList.remove('hidden');
        gameoverAudio.play();
        gameOver = true;
    }
};

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '' && !gameOver) {
            boxtext.innerText = turn;
            turnAudio.play();
            checkWin();
            checkDraw();
            if (!gameOver) {
                turn = changeTurn();
                document.getElementsByClassName("TURN")[0].innerText = "Turn for " + turn;
            }
        }
    });
});

// Reset button
document.getElementById('reset').addEventListener('click', () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    Array.from(boxtexts).forEach(e => e.innerText = '');
    document.getElementById('emoji').classList.add('hidden');
    document.getElementById('partyEmoji').classList.add('hidden');
    turn = "X";
    gameOver = false;
    document.getElementsByClassName("TURN")[0].innerText = "Turn for " + turn;
});