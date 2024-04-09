function getComputerChoice() {

    let possibleChoices = ["Rock", "Paper", "Scissors"];
    const choiceNumber = Math.floor(Math.random() * 3);
    const computerChoice = possibleChoices[choiceNumber];
    return computerChoice;
}

// Get player's choice through a prompt

let initialChoice = prompt("Rock, Paper or Scissors?")

// Format player's choice to ensure the correct case

function formatPlayerChoice() {
    
}

// Play a game. Nested IF functions x 3. Compare two selections and return a declaration.



// Create playGame function. Ensure that there are 5 rounds and a winner is reported at the end.