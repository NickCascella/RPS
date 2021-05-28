let computerScore = 0;
let humanScore = 0;

//computer AI
function computerPlay() {
     return Math.floor(1 + Math.random()*3)
};
let computerSelection = computerPlay();

//setting random number to a choice
if (computerSelection == 1) {
     computerSelection = 'Rock';
} else if (computerSelection == 2) {
    computerSelection = "Paper"
} else if (computerSelection == 3) {
    computerSelection = "Scissors"
} 


//setting possible outcomes
function playRound(playerSelection, computerSelection) {
    if (playerSelection.length === computerSelection.length){
        console.log("It's a tie!"); 
    } else if (playerSelection.length == 4 && computerSelection.length === 5) {
        console.log("You lose! Paper beats Rock!");   
        computerScore++
    } else if (playerSelection.length == 4 && computerSelection.length === 8) {
        console.log("You win! Rock beats Scissors!");   
        humanScore++
    } else if (playerSelection.length == 5 && computerSelection.length === 4) {
        console.log("You win! Paper beats Rock!");  
        humanScore++
    }else if (playerSelection.length == 5 && computerSelection.length === 8) {
        console.log("You lose! Scissors beats Paper!"); 
        computerScore++
    }else if (playerSelection.length == 8 && computerSelection.length === 4) {
        console.log("You lose! Rock beats Scissors!");  
        computerScore++
    } else if (playerSelection.length == 8 && computerSelection.length === 5) {
        console.log("You win! Scissors beats Paper!");   
        humanScore++
    } else {
        console.log("Something went wrong!");
}
}

function game(){

computerSelection = computerPlay();

//setting random number to a choice
if (computerSelection == 1) {
     computerSelection = 'Rock';
} else if (computerSelection == 2) {
    computerSelection = "Paper"
} else if (computerSelection == 3) {
    computerSelection = "Scissors"
} 

    playerSelection = prompt("Please enter a choice of either Rock, Paper, or Scissors");

    playRound (playerSelection, computerSelection)
    console.log(humanScore)
    console.log(computerScore)
    if (humanScore == 5){
        console.log("Gameover you wim!");
    } else if(computerScore == 5){
        console.log("Gameover you lose!");
    }
}

/*
-   Rock-Rock
Rock-paper
Rock-Scissors
-   Paper-Paper
Paper-Rock
Paper-Scissors
-   Scissors-Scissors
Scissors-Rock
Scissors-Paper

*/