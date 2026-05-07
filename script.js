


let humanScore = 0; 
let computerScore = 0;
let currentRounds = 1;



const buttons = document.querySelectorAll('button');
const roundResultDisplay = document.querySelector('#round-result');
const humanScoreDisplay = document.querySelector('#human-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const winner = document.querySelector('#final-winner');




function updateScoreDisplay (){
   
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
}

function checkWinner() {

    
    if (humanScore === 5) {
        winner.textContent = "Game Over! You won the match!";
        disableButtons(); // Prevent further clicks
    } else if (computerScore === 5) {
        winner.textContent = "Game Over! The Computer won the match!";
        disableButtons();
    }
}

function disableButtons() {
    
    buttons.forEach(btn => btn.disabled = true);
}




buttons.forEach((button) => {
    button.addEventListener('click', ()=> {
        playRound(button.id, getComputerChoice());
        
    });
});


function getComputerChoice () {

    const answer = Math.floor(Math.random()*3 ) + 1; // this is the code to generate random strings. the * 3 is because i need 3 strings and the +1 is to round off the number to a whole number

    if (answer === 1) return "rock";
    if (answer === 2) return "paper";
    return "scissors";
}



function playRound (humanSelection, computerSelection) {

if (humanSelection === computerSelection) {
    console.log('It\'s a tie');  
} else if (humanSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    updateScoreDisplay ();
} else if (humanSelection === "paper" && computerSelection === "rock") {
    humanScore++;
    updateScoreDisplay();
} else if (humanSelection === "rock" && computerSelection === "scissors") {
    humanScore++;
    updateScoreDisplay();
} else if (humanSelection === "scissors" && computerSelection === "paper") {
    humanScore++;
    updateScoreDisplay();
} else if (humanSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    updateScoreDisplay();
} else if (computerSelection === "rock" && humanSelection === "scissors") {
    computerScore++;
    updateScoreDisplay();
}  // REMOVED: the broken catch-all condition


checkWinner ();
}




 
 