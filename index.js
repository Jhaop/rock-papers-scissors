const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const h2 = document.getElementById('result');
const gameWinner = document.getElementById('gameWinner');
const playerPoints = document.getElementById('playerPoints');
const computerPoints = document.getElementById('computerPoints');
let playerPointsCounter = 0;
let computerPointsCounter = 0;
playerPoints.textContent = playerPointsCounter;
computerPoints.textContent = computerPointsCounter;
const restartButton = document.getElementById('restart');
restartButton.addEventListener('click', restartGame);

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    if(rand < 1) 
        return "rock";
    else if (rand < 2)
        return "paper";
        else
            return "scissors";
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === computerSelection) {
        return ("It's a draw!");
    } else if (playerSelection === "rock") {    // Player = Rock
        if(computerSelection === "scissors")
            return ("You win! Rock beats Scissors");
        else 
            return ("You lose! Paper beats Rock");
    } else if (playerSelection === "paper") {   // Player = Paper
        if(computerSelection === "rock")       
            return ("You win! Paper beats Rock");
        else
            return ("You lose! Scissors beats Paper");
    } else 
        if(computerSelection === "paper")
            return ("You win! Scissors beats Paper");
        else 
            return ("You lose! Rock beats Scissors");
}



rockBtn.addEventListener('click', () => {
    if(gameWinner.textContent !== '') 
        restartGame();       
    h2.textContent = playRound('rock', getComputerChoice());
    game();
});

paperBtn.addEventListener('click', () => {
    if(gameWinner.textContent !== '') 
        restartGame();       
    h2.textContent = playRound('paper', getComputerChoice());
    game();
});

scissorsBtn.addEventListener('click', () => {
    if(gameWinner.textContent !== '') 
        restartGame();       
    h2.textContent = playRound('scissors', getComputerChoice());
    game();
});



function game() {
    if (h2.textContent.slice(0,7) === 'You win') {
        playerPointsCounter++;
        playerPoints.textContent = playerPointsCounter; 
    } else if (h2.textContent.slice(0,8) === 'You lose') {
        computerPointsCounter++;
        computerPoints.textContent = computerPointsCounter;
    }
    if(playerPointsCounter === 5) {
        gameWinner.textContent = 'You won the game!';
    } else if (computerPointsCounter === 5) {
        gameWinner.textContent = 'You lost the game!';
    }
}

function restartGame() {
    playerPointsCounter = 0;
    computerPointsCounter = 0;
    computerPoints.textContent = computerPointsCounter;
    playerPoints.textContent = playerPointsCounter;
    gameWinner.textContent= '';
}