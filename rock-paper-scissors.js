function getComputerChoice() {
  return ["Rock", "Paper", "Scissors"][Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
  let playerChoice = prompt("Rock, paper or scissors?");
  return playerChoice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase())
    return "Tie!";
  else {
    if (playerSelection.toLowerCase() === "rock") {
      if (computerSelection.toLowerCase() === "paper") {
        return "You lose! Paper beats rock!";
      }
      if (computerSelection.toLowerCase() === "scissors") {
        return "You win! Rock beats scissors!";
      }
    } else if (playerSelection.toLowerCase() === "paper") {
      if (computerSelection.toLowerCase() === "rock") {
        return "You win! Paper beats rock!";
      }
      if (computerSelection.toLowerCase() === "scissors") {
        return "You lose! Scissors beat paper!";
      }
    } else if (playerSelection.toLowerCase() === "scissors") {
      if (computerSelection.toLowerCase() === "paper") {
        return "You win! Scissors beat paper!";
      }
      if (computerSelection.toLowerCase() === "rock") {
        return "You lose! Rock beats scissors!";
      }
    }
  }
}

let playerScore = 0;
let computerScore = 0;
for (let index = 0; index < 5; index++) {
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  const roundResult = playRound(playerSelection, computerSelection);
  console.log(roundResult);
  if (roundResult.includes("You win")) {
    playerScore++;
  } else if (roundResult.includes("You lose")) {
    computerScore++;
  }
}

console.log(`You: ${playerScore}, computer: ${computerScore}`);
