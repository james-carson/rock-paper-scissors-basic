function getComputerChoice() {

    let possibleChoices = ["Rock", "Paper", "Scissors"];
    const choiceNumber = Math.floor(Math.random() * 3);
    const computerChoice = possibleChoices[choiceNumber];
    return computerChoice;
}
// This works - checked with console.log


// 2) Get player's choice through a prompt

// This has been moved to the function below!


// 3) Format player's choice to ensure the correct case

function formatPlayerChoice() {
    let initialChoice = prompt("Rock, Paper or Scissors?");

    let stringStart = initialChoice[0];
    let stringStartCaps = stringStart.toUpperCase();

    let stringRemainder = initialChoice.slice(1);
    let stringRemainderLower = stringRemainder.toLowerCase();

    let formattedPlayerChoice = stringStartCaps + stringRemainderLower
    console.log(formattedPlayerChoice)

    return formattedPlayerChoice;
}

// Putting this here for testing purposes:
formatPlayerChoice()

// 4) Play a game. Nested IF functions x 3. Compare two selections and return a declaration.



// 5) Create playGame function. Ensure that there are 5 rounds and a winner is reported at the end.