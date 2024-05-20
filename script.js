function getComputerChoice() {
    let possibleChoices = ["Rock", "Paper", "Scissors"];
    const choiceNumber = Math.floor(Math.random() * possibleChoices.length);
    const computerChoice = possibleChoices[choiceNumber];
    return computerChoice;
}

function getPlayerChoice() {
    let initialChoice = prompt("Rock, Paper or Scissors?");

    let stringStart = initialChoice[0];
    let stringStartCaps = stringStart.toUpperCase();

    let stringRemainder = initialChoice.slice(1);
    let stringRemainderLower = stringRemainder.toLowerCase();

    const playerChoice = stringStartCaps + stringRemainderLower;

    return playerChoice;
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === "Rock") {
        if (computerChoice === "Rock") {
            alert("It's a draw!");
            let result = "draw";
            return result;
        }
        else if (computerChoice === "Paper") {
            alert("You lose! Paper beats Rock!");
            let result = "lose";
            return result;
        }
        else if (computerChoice === "Scissors") {
            alert("You win! Rock beats Paper!");
            let result = "win";
            return result;
        }
        else{
            alert("Something fucked up somewhere. You probably entered something incorrectly. Reload and start again.");
        }
    }
    else if (playerChoice === "Paper") {
        if (computerChoice === "Rock") {
            alert("You win! Paper beats Rock!");
            let result = "win";
            return result;
        }
        else if (computerChoice === "Paper") {
            alert("It's a draw!");
            let result = "draw";
            return result;
        }
        else if (computerChoice === "Scissors") {
            alert("You lose! Scissors beats Paper!");
            let result = "lose";
            return result;
        }
        else{
            alert("Something fucked up somewhere. You probably entered something incorrectly. Reload and start again.");
        }
    }
    else if (playerChoice === "Scissors") {
        if (computerChoice === "Rock") {
            alert("You lose! Rock beats Scissors!");
            let result = "lose";
            return result;
        }
        else if (computerChoice === "Paper") {
            alert("You win! Scissors beats Paper!");
            let result = "win";
            return result;
        }
        else if (computerChoice === "Scissors") {
            alert("It's a draw!");
            let result = "draw";
            return result;
        }
        else{
            alert("Something fucked up somewhere. You probably entered something incorrectly.");
        }
    }
    else if (playerChoice === null || 0 || undefined) {
        alert("You have to actually write something... Reload and start again.")
    }
    else {
        alert("Something fucked up somewhere. You probably entered something incorrectly. Reload and start again.");
    }

}

function playGame() {
    // Set score
    let playerScore = 0;
    let computerScore = 0;

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
        alert("Uh oh. Something went wrong with scoring. Reload and start again.");
    }

    alert("The score after Round 1 is " + playerScore + " to you and " + computerScore + " to the computer.");

    // Select R/P/S 2
    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice();

    // Game 2
    result = playRound(playerChoice, computerChoice);

    // Update Score 2

    if (result === "win") {
        ++playerScore;
    }
    else if (result === "lose") {
        ++computerScore;
    }
    else if (result === "draw") {}
    else {
        alert("Uh oh. Something went wrong with scoring. Reload and start again.");
    }

    alert("The score after Round 2 is " + playerScore + " to you and " + computerScore + " to the computer.");

    // Select R/P/S 3
    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice();

    // Game 3
    result = playRound(playerChoice, computerChoice);

    // Update Score 3

    if (result === "win") {
        ++playerScore;
    }
    else if (result === "lose") {
        ++computerScore;
    }
    else if (result === "draw") {}
    else {
        alert("Uh oh. Something went wrong with scoring. Reload and start again.");
    }

    alert("The score after Round 3 is " + playerScore + " to you and " + computerScore + " to the computer.");

    // Select R/P/S 4
    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice();

    // Game 4
    result = playRound(playerChoice, computerChoice)

    // Update Score 4

    if (result === "win") {
        ++playerScore;
    }
    else if (result === "lose") {
        ++computerScore;
    }
    else if (result === "draw") {}
    else {
        alert("Uh oh. Something went wrong with scoring. Reload and start again.");
    }

    alert("The score after Round 4 is " + playerScore + " to you and " + computerScore + " to the computer.");

    // Select R/P/S 5
    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice();

    // Game 5
    result = playRound(playerChoice, computerChoice);

    // Update Score 5
    if (result === "win") {
        ++playerScore;
    }
    else if (result === "lose") {
        ++computerScore;
    }
    else if (result === "draw") {}
    else {
        alert("Uh oh. Something went wrong with scoring. Reload and start again.");
    }

    alert("The score after Round 5 is " + playerScore + " to you and " + computerScore + " to the computer.");

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

playGame()