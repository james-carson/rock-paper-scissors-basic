// *** UI: Here is the new code that controls the UI ***

const rockButton = document.querySelector(".rock_button");
const paperButton = document.querySelector(".paper_button");
const scissorsButton = document.querySelector(".scissors_button");
const message = document.querySelector(".message_box");
const playerScoreNumber = document.querySelector(".player_score_number");
const roundsPlayedNumber = document.querySelector(".rounds_played_number");
const computerScoreNumber = document.querySelector(".computer_score_number");
const winMessage = document.createElement("p")

rockButton.addEventListener('click', () => {
    let result = playRound("Rock", getComputerChoice())
});

paperButton.addEventListener('click', () => {
    let result = playRound("Paper", getComputerChoice())
});

scissorsButton.addEventListener('click', () => {
    let result = playRound("Scissors", getComputerChoice())
});

// *** GAME: Here is the code that runs the game ***

// Functions need to be defined first:

function getComputerChoice() {
    let possibleChoices = ["Rock", "Paper", "Scissors"];
    const choiceNumber = Math.floor(Math.random() * possibleChoices.length);
    const computerChoice = possibleChoices[choiceNumber];
    return computerChoice;
}

// Need to move the game logic here:



// End of the above game logic

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

playerScoreNumber.textContent = playerScore;
computerScoreNumber.textContent = computerScore;
roundsPlayedNumber.textContent = roundsPlayed;

function playRound(playerChoice, computerChoice) {

    if (roundsPlayed < 5){
        // Draw condition:
        if (playerChoice === computerChoice) {
            roundsPlayed++;
            roundsPlayedNumber.textContent = roundsPlayed;
            message.textContent = `It's a draw! You chose ${playerChoice} and the computer chose ${computerChoice}. The score is ${playerScore} \- ${computerScore}. No points for anyone.`;
        }
        // Win conditions:
        else if ((playerChoice === "Rock" && computerChoice === "Scissors") ||
            (playerChoice === "Paper" && computerChoice === "Rock") || 
            (playerChoice === "Scissors" && computerChoice === "Paper")
        ) {
            roundsPlayed++;
            roundsPlayedNumber.textContent = roundsPlayed;
            playerScore++;
            playerScoreNumber.textContent = playerScore;
            message.textContent = `You win! ${playerChoice} beats ${computerChoice}. The score is ${playerScore} \- ${computerScore}.`;
        }
        // Lose conditions:
        else if ((playerChoice === "Rock" && computerChoice === "Paper") ||
                (playerChoice === "Paper" && computerChoice === "Scissors") || 
                (playerChoice === "Scissors" && computerChoice === "Rock")
        ) {
            roundsPlayed++;
            roundsPlayedNumber.textContent = roundsPlayed;
            computerScore++;
            computerScoreNumber.textContent = computerScore;
            message.textContent = `You lose! Idiot. ${computerChoice} beats ${playerChoice}. The score is ${playerScore} \- ${computerScore}.`;
        }
        // Error:
        else {
            message.textContent = "Something fucked up somewhere. Reload and start again.";
        }}
        
    else if (roundsPlayed = 5) {
        
        // This is the end of the game message

        // Draw
        if (playerScore === computerScore){

        }

        // Win
        if (playerScore > computerScore){
            
        }

        // Lose
        if (playerScore < computerScore){
            
        }
    }
    else {
        message.textContent = "Something fucked up somewhere. Reload and start again.";
    }}


//     if (playerChoice === "Rock") {
//         if (computerChoice === "Rock") {
//             message.textContent = "It's a draw!";
//             let result = "draw";
//             return result;
//         }
//         else if (computerChoice === "Paper") {
//             message.textContent = "You lose! Paper beats Rock!";
//             let result = "lose";
//             return result;
//         }
//         else if (computerChoice === "Scissors") {
//             message.textContent = "You win! Rock beats Paper!";
//             let result = "win";
//             return result;
//         }
//         else{
//             message.textContent = "Something fucked up somewhere. You probably entered something incorrectly. Reload and start again.";
//         }
//     }
//     else if (playerChoice === "Paper") {
//         if (computerChoice === "Rock") {
//             message.textContent = "You win! Paper beats Rock!";
//             let result = "win";
//             return result;
//         }
//         else if (computerChoice === "Paper") {
//             message.textContent = "It's a draw!";
//             let result = "draw";
//             return result;
//         }
//         else if (computerChoice === "Scissors") {
//             message.textContent = "You lose! Scissors beats Paper!";
//             let result = "lose";
//             return result;
//         }
//         else{
//             message.textContent = "Something fucked up somewhere. You probably entered something incorrectly. Reload and start again.";
//         }
//     }
//     else if (playerChoice === "Scissors") {
//         if (computerChoice === "Rock") {
//             message.textContent = "You lose! Rock beats Scissors!";
//             let result = "lose";
//             return result;
//         }
//         else if (computerChoice === "Paper") {
//             message.textContent = "You win! Scissors beats Paper!";
//             let result = "win";
//             return result;
//         }
//         else if (computerChoice === "Scissors") {
//             message.textContent ="It's a draw!";
//             let result = "draw";
//             return result;
//         }
//         else{
//             message.textContent ="Something fucked up somewhere. You probably entered something incorrectly.";
//         }
//     }
//     else if (playerChoice === null || 0 || undefined) {
//         message.textContent = "You have to actually write something... Reload and start again."
//     }
//     else {
//         message.textContent = "Something fucked up somewhere. You probably entered something incorrectly. Reload and start again.";
//     }

//     if (result === "win") {
//         ++playerScore;
//     }
//     else if (result === "lose") {
//         ++computerScore;
//     }
//     else if (result === "draw") {}
//     else {
//         message.textContent = "Uh oh. Something went wrong with scoring. Reload and start again.";
//     }

//     message.textContent = "The score after Round 1 is " + playerScore + " to you and " + computerScore + " to the computer.";
// }

function playGame() {
    // // Set score
    // let playerScore = 0;
    // let computerScore = 0;
    // Have moved this outside of the function.

    // Select R/P/S 1
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();

    // Game 1
    let result = playRound(playerChoice, computerChoice);
    console.log(result);

    // Update Score 1

    if (result === "win") {
        ++playerScore;
    }
    else if (result === "lose") {
        ++computerScore;
    }
    else if (result === "draw") {}
    else {
        message.textContent = "Uh oh. Something went wrong with scoring. Reload and start again.";
    }

    message.textContent = "The score after Round 1 is " + playerScore + " to you and " + computerScore + " to the computer.";

    // Calculate winner

    if (playerScore > computerScore) {
        alert("Well done, you beat a machine...");
    }
    else if (computerScore > playerScore){
        alert("The computer won. It's clearly much cleverer than you.");
    }
    else if (computerScore === playerScore)
        alert("It's a draw. How? How do you draw with a computer with no hands?")
    else {
        alert("Well, something has gone wrong here.")
    }
}