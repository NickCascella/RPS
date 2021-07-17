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
//score keeping function 

//setting possible outcomes
function playRound(playerSelection, computerSelection) {
    if (playerSelection.length === computerSelection.length){
        comments.textContent = 'You both are no good!'; 
    } else if (playerSelection.length == 4 && computerSelection.length === 5) {
        comments.textContent = "Damn! Paper beats Rock! :(";
        computerScore++
    } else if (playerSelection.length == 4 && computerSelection.length === 8) {
        comments.textContent = "Nice! Rock beats Scissors!";   
        humanScore++
    } else if (playerSelection.length == 5 && computerSelection.length === 4) {
        comments.textContent = "Good going! Paper beats Rock!";  
        humanScore++
    }else if (playerSelection.length == 5 && computerSelection.length === 8) {
        comments.textContent = "Try harder! Scissors beats Paper!"; 
        computerScore++
    }else if (playerSelection.length == 8 && computerSelection.length === 4) {
        comments.textContent = "Damn! Rock beats Scissors!";  
        computerScore++
    } else if (playerSelection.length == 8 && computerSelection.length === 5) {
        comments.textContent = "Yay! Scissors beats Paper!";   
        humanScore++
    } else {
        comments.textContent = 'Nice going. something is broken >:(';
}
}


let decisionR = () =>{
    let playerSelection = 'rock'
    computerSelection = computerPlay()

    
    if (computerSelection == 1) {
        computerSelection = 'Rock';
   } else if (computerSelection == 2) {
       computerSelection = "Paper"
   } else if (computerSelection == 3) {
       computerSelection = "Scissors"
   } 
    
   playRound (playerSelection, computerSelection)
   console.log(humanScore)
   console.log(computerScore)
   if (humanScore == 5){
       comments.textContent = "Gameover you win!"
       humanScore = 0
       computerScore = 0
   } else if(computerScore == 5){
       comments.textContent = "Gameover you lose!"
       humanScore = 0
       computerScore = 0
   }

    scoreDisplayC.textContent =`Computer : ${computerScore}`
    scoreDisplayH.textContent =`You : ${humanScore}`
}

let decisionP = () =>{
    let playerSelection = 'paper'
    computerSelection = computerPlay()

    if (computerSelection == 1) {
        computerSelection = 'Rock';
   } else if (computerSelection == 2) {
       computerSelection = "Paper"
   } else if (computerSelection == 3) {
       computerSelection = "Scissors"
   } 
    
   playRound (playerSelection, computerSelection)
   console.log(humanScore)
   console.log(computerScore)
   if (humanScore == 5){
       comments.textContent = "Gameover you win!"
       humanScore = 0
       computerScore = 0
   } else if(computerScore == 5){
       comments.textContent = "Gameover you lose!"
       humanScore = 0
       computerScore = 0
   }
   
   scoreDisplayC.textContent =`Computer : ${computerScore}`
   scoreDisplayH.textContent =`You : ${humanScore}`
   
}
let decisionS = () =>{
    let playerSelection = 'scissors'
    computerSelection = computerPlay()
 
    if (computerSelection == 1) {
        computerSelection = 'Rock';
   } else if (computerSelection == 2) {
       computerSelection = "Paper"
   } else if (computerSelection == 3) {
       computerSelection = "Scissors"
   } 
    
   playRound (playerSelection, computerSelection)
   console.log(humanScore)
   console.log(computerScore)
   if (humanScore == 5){
      comments.textContent = "Gameover you win!"
       humanScore = 0
       computerScore = 0
   } else if(computerScore == 5){
    comments.textContent = "Gameover you lose!"
       humanScore = 0
       computerScore = 0
   }

   scoreDisplayC.textContent =`Computer : ${computerScore}`
   scoreDisplayH.textContent =`You : ${humanScore}`
    
}

let comments = document.querySelector('#comments')
let scoreDisplayC = document.querySelector('#scoreC')
let scoreDisplayH = document.querySelector('#scoreH')
scoreDisplayC.textContent =`Computer : ${computerScore}`
scoreDisplayH.textContent =`You : ${humanScore}`
comments.textContent = 'Begin!'


let humanChoiceR = document.querySelector('#rock-selection')
let humanChoiceP = document.querySelector('#paper-selection')
let humanChoiceS = document.querySelector('#scissors-selection')

humanChoiceR.addEventListener('click', decisionR)
humanChoiceP.addEventListener('click', decisionP)
humanChoiceS.addEventListener('click', decisionS)
