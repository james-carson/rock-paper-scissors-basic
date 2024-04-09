function getComputerChoice() {
    let possibleChoices = ["Rock", "Paper", "Scissors"];
    const choiceNumber = Math.floor(Math.random() * 3);
    const computerChoice = possibleChoices[choiceNumber];
    return computerChoice;
}

// This does work - how to move these variables in?

// 2) Get player's choice through a prompt

// This has been moved to the function below!


// 3) Format player's choice to ensure the correct case

function getPlayerChoice() {
    let initialChoice = prompt("Rock, Paper or Scissors?");

    let stringStart = initialChoice[0];
    let stringStartCaps = stringStart.toUpperCase();

    let stringRemainder = initialChoice.slice(1);
    let stringRemainderLower = stringRemainder.toLowerCase();

    const playerChoice = stringStartCaps + stringRemainderLower;

    return playerChoice;
}

// Putting this here for testing purposes:
// formatPlayerChoice()

// 4) Play a game. Nested IF functions x 3. Compare two selections and return a declaration.

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
            alert("Something fucked up somewhere. You probably entered something incorrectly.");
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
            alert("Something fucked up somewhere. You probably entered something incorrectly.");
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
    else {
        alert("Something fucked up somewhere. You probably entered something incorrectly.");
    }

}

// Need to work out logging of result now.

// 5) Create playGame function. Ensure that there are 5 rounds and a winner is reported at the end.

function playGame() {
    // Set score
    let playerScore = 0;
    let computerScore = 0;

    // Select R/P/S 1
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();

    // Game 1
    playRound(playerChoice, computerChoice);

    // Update Score 1

    // Select R/P/S 2
    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice();

    // Game 2
    playRound(playerChoice, computerChoice);

    // Update Score 2

    // Select R/P/S 3
    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice();

    // Game 3
    playRound(playerChoice, computerChoice);

    // Update Score 3

    // Select R/P/S 4
    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice();

    // Game 4
    playRound(playerChoice, computerChoice)

    // Update Score 4

    // Select R/P/S 5
    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice();

    // Game 5
    playRound(playerChoice, computerChoice);

    // Update Score 5
}

playGame()