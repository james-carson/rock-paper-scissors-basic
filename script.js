function getComputerChoice() {

    let possibleChoices = ["Rock", "Paper", "Scissors"];
    const choiceNumber = Math.floor(Math.random() * 3);
    const computerChoice = possibleChoices[choiceNumber];
    return computerChoice;
}

let initialAnswer = prompt("Rock, Paper or Scissors?")

function getPlayerChoice() {
    
}