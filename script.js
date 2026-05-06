console.log("welcome to tic tac toe")
let board = ["","","","","","","","",""];
let currentPlayer = "X";
let gameOver = false;

//function of click


function renderBoard() {
    for (let i = 0; i < 9; i++) {
        document.querySelector('[data-index="' + i + '"] .boxtext').textContent = board[i];
    }
}
//
function handleClick(index) {
    if(board[index]  !=="")  return;
    board[index] = currentPlayer;
    currentPlayer=currentPlayer==="X"?"O":"X";
    console.log(board);
    renderBoard();

let result = checkWinner();
if(result === "X" || result === "O") {
    alert(result + " wins!");
    gameOver = true;
} else if(result === "draw") {
    alert("It's a draw!");
    gameOver = true;
    }
}

//
function checkWinner() {
    if(board[0] === board[1] && board[1] === board[2] && board[0] !== "") {
    return board[0];
}
if(board[3] === board[4] && board[4] === board[5] && board[3] !== "") {
    return board[3];
}
if(board[6] === board[7] && board[7] === board[8] && board[6] !== "") {
    return board[6];
}
if(board[0] === board[3] && board[3] === board[6] && board[0] !== "") {
    return board[0];
}
if(board[1] === board[4] && board[4] === board[7] && board[1] !== "") {
    return board[1];
}
if(board[2] === board[5] && board[5] === board[8] && board[2] !== "") {
    return board[2];
}
if(board[0] === board[4] && board[4] === board[8] && board[0] !== "") {
    return board[0];
}
if(board[2] === board[4] && board[4] === board[6] && board[2] !== "") {
    return board[2];
}
if(board.every(cell => cell !== "")) {
        return "draw";
    }
    
    return null;
}
    // loop through them


    // check if all 3 slots in a combo have the same value
    // return the winner or null
function resetGame() {
    board = ["","","","","","","","",""];
    currentPlayer = "X";
    gameOver = false;
    renderBoard();
}