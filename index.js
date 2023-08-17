function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    if(rand < 1) 
        return "rock";
    else if (rand < 2)
        return "paper";
        else
            return "scissors";
}

function rockpaperscissors(playerSelection, computerSelection) {
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
            return ("You win! Scissors beat Paper");
        else 
            return ("You lose! Rock beats Scissors");
}

function game() {
    let playerSelection;
    let result;
    let playerWon = 0;
    let computerWon = 0;
    let resultString;
    for(let i = 0; i < 5; i++) {
        playerSelection = prompt("Insert choice (Rock/Paper/Scissors)");
        result = rockpaperscissors(playerSelection, getComputerChoice());
        resultString = result.slice(4,7);
        if(resultString === "win") {
            playerWon++;
            console.log("Player point");
        }
        else if (resultString === "los") {
            computerWon++;
            console.log("Computer point");
        } else console.log("Draw");
        console.log("\n");
    }
    console.log(`Final result - Player: ${playerWon} , Computer ${computerWon}`);
}