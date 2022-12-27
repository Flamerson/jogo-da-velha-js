var game = document.getElementById("game-area"); // estamos pegando os campos la do html
var winGame= document.getElementById("win-game");
var textWin = document.getElementById("textWin");

// variaveis do jogo
var player = 1;
var gameSquares = [0,0,0,0,0,0,0,0,0]

// aqui criamos o tabuleiro
for(let i = 0; i != 9; i++){
    oldGame = game.innerHTML;
    game.innerHTML = oldGame + `<div class="square" id="square-${i}" onclick="checkClickSquare(${i})" ></div>`;
};

const checkWinnerTabble = [
    // horizontal win
    [0,1,2],
    [3,4,5],
    [6,7,8],
    // vertical win
    [0,3,6],
    [1,4,7],
    [2,5,8],
    // diagonal win
    [0,4,8],
    [2,4,6]
]

// checar em qual quadrado clicou
function checkClickSquare(number){
    let square = document.getElementById(`square-${number}`)

    if(player === 1){
        if(square.innerHTML != ""){
            return;
        }
        square.innerHTML = "X";
        checkWinnerPlayer(number);
        player = 2;
    }else{
        if(square.innerHTML != ""){
            return;
        }
        square.innerHTML = "O";
        checkWinnerPlayer(number);
        player = 1;
    };

};

// verifica se tem vencedor
function checkWinnerPlayer(number){
    gameSquares[number] = player;

    for(let i = 0;checkWinnerTabble.length > i; i ++){

        let line1 = checkWinnerTabble[i][0];
        let line2 = checkWinnerTabble[i][1];
        let line3 = checkWinnerTabble[i][2];

        // verifica se um dos players ganhou
        if(gameSquares[line1] == player && gameSquares[line2] == player && gameSquares[line3] == player){
            textWin.innerHTML = `Player ${player} Win`;
            winGame.className = "win-game";
            return;
        }   
    }

    // verifica se deu empate, essa função every é massa, ela é booleana.
    if(gameSquares.every(e => (e != 0))){
        textWin.innerHTML = `Game Draw`;
        winGame.className = "win-game";
    }

};

// reinicia o jogo
function restartGame() {
    player = 1;
    gameSquares = [0,0,0,0,0,0,0,0,0]
    winGame.className = "disable";
    for(let i = 0; i != 9; i ++){
        let square = document.getElementById(`square-${i}`);
        square.innerHTML = "";
    }
}