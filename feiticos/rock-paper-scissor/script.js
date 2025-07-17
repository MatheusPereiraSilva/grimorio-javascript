const buttons = document.querySelectorAll("button");
const resultEl = document.querySelector('#result');
const userScoreEL = document.querySelector("#user-score");
const computerScoreEl = document.querySelector("#computer-score");
let playerScore = 0
let computerScore = 0

function computerPLay() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "it's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.id, computerPLay());
    resultEl.textContent = result;
    userScoreEL.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
  });
});
