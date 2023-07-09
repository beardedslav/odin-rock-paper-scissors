let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return ["Rock", "Paper", "Scissors"][Math.floor(Math.random() * 3)];
}

function playRock() {
  const computerSelection = getComputerChoice();
  playRoundAndProcessResult("rock", computerSelection);
}

function playPaper() {
  const computerSelection = getComputerChoice();
  playRoundAndProcessResult("paper", computerSelection);
}

function playScissors() {
  const computerSelection = getComputerChoice();
  playRoundAndProcessResult("scissors", computerSelection);
}

function playRoundAndProcessResult(playerSelection, computerSelection) {
  roundResult = playRound(playerSelection, computerSelection);
  if (roundResult.includes("You win")) {
    playerScore++;
  } else if (roundResult.includes("You lose")) {
    computerScore++;
  }
  playerScoreParagraph = document.querySelector("#playerScore");
  playerScoreParagraph.innerHTML = `Player score : ${playerScore}`;
  computerScoreParagraph = document.querySelector("#computerScore");
  computerScoreParagraph.innerHTML = `Computer score : ${computerScore}`;

  winnerParagraph = document.querySelector("#winner");
  if (playerScore === 5) {
    winnerParagraph.innerHTML = "<b>YOU WIN!</b>";
  } else if (computerScore === 5) {
    winnerParagraph.innerHTML = "<b>COMPUTER WINS!</b>";
  }
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
