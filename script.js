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

let playerScore = 0
let computerScore = 0

let computerChoice = getComputerChoice()
console.log(computerChoice)
let playerChoice = getPlayerChoice()
console.log(playerChoice);

function playRound(playerChoice, computerChoice) {

    let result = null

    if (playerChoice === "Rock") {
        if (computerChoice === "Rock") {
            alert("It's a draw!")
            return result = "draw"
        }
        else if (computerChoice === "Paper") {
            alert("You lose! Paper beats Rock!")
            return result = "lose"
        }
        else if (computerChoice === "Scissors") {
            alert("You win! Rock beats Paper!")
            return result = "win"
        }
        else{
            alert("Something fucked up somewhere");
        }

    }
    else if (playerChoice === "Paper") {
        if (computerChoice === "Rock") {
            alert("You win! Paper beats Rock!")
            return result = "win"
        }
        else if (computerChoice === "Paper") {
            alert("It's a draw!")
            return result = "draw"
        }
        else if (computerChoice === "Scissors") {
            alert("You lose! Scissors beats Paper!")
            return result = "lose"
        }
        else{
            alert("Something fucked up somewhere");
        }
    }
    else if (playerChoice === "Scissors") {
        if (computerChoice === "Rock") {
            alert("You lose! Rock beats Scissors!")
            return result = "lose"
        }
        else if (computerChoice === "Paper") {
            alert("You win! Scissors beats Paper!")
            return result = "win"
        }
        else if (computerChoice === "Scissors") {
            alert("It's a draw!")
            return result = "draw"
        }
        else{
            alert("Something fucked up somewhere");
        }
    }
    else {
        alert("Something fucked up somewhere");
    }

    console.log(result)
    
}

playRound(playerChoice, computerChoice)

// 5) Create playGame function. Ensure that there are 5 rounds and a winner is reported at the end.