// UI:

const rockButton = document.querySelector(".rock_button");
const paperButton = document.querySelector(".paper_button");
const scissorsButton = document.querySelector(".scissors_button");
const message = document.querySelector(".message_box");
const playerScoreNumber = document.querySelector(".player_score_number");
const roundsPlayedNumber = document.querySelector(".rounds_played_number");
const computerScoreNumber = document.querySelector(".computer_score_number");
const winMessage = document.createElement("p")

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

playerScoreNumber.textContent = playerScore;
computerScoreNumber.textContent = computerScore;
roundsPlayedNumber.textContent = roundsPlayed;

rockButton.addEventListener('click', () => {
    playRound("Rock", getComputerChoice())
    });

paperButton.addEventListener('click', () => {
    playRound("Paper", getComputerChoice())
});

scissorsButton.addEventListener('click', () => {
    playRound("Scissors", getComputerChoice())
});

// GAME:

function getComputerChoice() {
    let possibleChoices = ["Rock", "Paper", "Scissors"];
    const choiceNumber = Math.floor(Math.random() * possibleChoices.length);
    const computerChoice = possibleChoices[choiceNumber];
    return computerChoice;
}

function checkForWin() {
    if (roundsPlayed === 5) {
        if (playerScore === computerScore){
            winMessage.textContent = `The final score is ${playerScore} \- ${computerScore} after 5 rounds. You couldn't even beat a computer. What's wrong with you? Reload to play again.`;
            message.appendChild(winMessage);
        }
        else if (playerScore > computerScore){
            winMessage.textContent = `The final score is ${playerScore} \- ${computerScore} after 5 rounds. Well done, you beat a soulless machine. Are you proud of yourself? Reload to play again.`
            message.appendChild(winMessage);
        }
        else if (playerScore < computerScore){
            winMessage.textContent = `The final score is ${playerScore} \- ${computerScore} after 5 rounds. You lost to an inanimate object. Are you stupid? Reload to play again.`
            message.appendChild(winMessage);
        }
    }
}

function playRound(playerChoice, computerChoice) {
    if (roundsPlayed < 5){
        if (playerChoice === computerChoice) {
            roundsPlayed++;
            roundsPlayedNumber.textContent = roundsPlayed;
            message.textContent = `It's a draw! You chose ${playerChoice} and the computer chose ${computerChoice}. The score is ${playerScore} \- ${computerScore}. No points for anyone.`;
            checkForWin();
        }
        else if ((playerChoice === "Rock" && computerChoice === "Scissors") ||
            (playerChoice === "Paper" && computerChoice === "Rock") || 
            (playerChoice === "Scissors" && computerChoice === "Paper")
        ) {
            roundsPlayed++;
            roundsPlayedNumber.textContent = roundsPlayed;
            playerScore++;
            playerScoreNumber.textContent = playerScore;
            message.textContent = `You win! ${playerChoice} beats ${computerChoice}. The score is ${playerScore} \- ${computerScore}.`;
            checkForWin();
        }
        else if ((playerChoice === "Rock" && computerChoice === "Paper") ||
                (playerChoice === "Paper" && computerChoice === "Scissors") || 
                (playerChoice === "Scissors" && computerChoice === "Rock")
        ) {
            roundsPlayed++;
            roundsPlayedNumber.textContent = roundsPlayed;
            computerScore++;
            computerScoreNumber.textContent = computerScore;
            message.textContent = `You lose! Idiot. ${computerChoice} beats ${playerChoice}. The score is ${playerScore} \- ${computerScore}.`;
            checkForWin();
        }}
}