"use strict";

const getComputerChoice = function (min = 1, max = 3) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const result = Math.floor(Math.random() * (max - min + 1) + min);

  if (result === 1) {
    return "rock";
  } else if (result === 2) {
    return "paper";
  } else {
    return "scissors";
  }
};

let playerScore = 0;
let playerScoreResult = document.querySelector(".player-score");

let computerScore = 0;
let computerScoreResult = document.querySelector(".computer-score");

let playerResult = document.querySelector(".player-result");
let computerResult = document.querySelector(".computer-result");

const computerChoice = function (computerSelection) {
  computerSelection = getComputerChoice();
  if (computerSelection === "rock") {
    computerResult.textContent = "rock";
  } else if (computerSelection === "paper") {
    computerResult.textContent = "paper";
  } else {
    computerResult.textContent = "scissors";
  }
  return computerSelection;
};

const playRound = function (playerSelection, computerSelection) {
  playerSelection = function (type, selector, callback) {
    document.addEventListener(type, (e) => {
      if (e.target.matches(selector)) callback(e.target);
    });
  };

  playerSelection("click", ".btn", (e) => {
    if (e.classList[1] === "btn-rock") {
      playerResult.textContent = "rock";
      computerChoice(computerSelection);
    } else if (e.classList[1] === "btn-paper") {
      playerResult.textContent = "paper";
      computerChoice(computerSelection);
    } else if (e.classList[1] === "btn-scissors") {
      playerResult.textContent = "scissors";
      computerChoice(computerSelection);
    }

    if (playerResult.textContent === "rock" && computerChoice() === "paper") {
      computerScore++;
    } else if (
      playerResult.textContent === "rock" &&
      computerChoice(computerSelection) === "scissors"
    ) {
      playerScore++;
    } else if (
      playerResult.textContent === "paper" &&
      computerChoice(computerSelection) === "rock"
    ) {
      playerScore++;
    } else if (
      playerResult.textContent === "paper" &&
      computerChoice(computerSelection) === "scissors"
    ) {
      computerScore++;
    } else if (
      playerResult.textContent === "scissors" &&
      computerChoice(computerSelection) === "rock"
    ) {
      computerScore++;
    } else if (
      playerResult.textContent === "scissors" &&
      computerChoice(computerSelection) === "paper"
    ) {
      playerScore++;
    }

    playerScoreResult.textContent = playerScore;
    computerScoreResult.textContent = computerScore;
    console.log(playerScore, computerScore);
  });
  console.log(playerScore, computerScore);
};

const game = function () {
  while (playerScore < 5 || computerScore < 5) {
    playRound();
  }

  if (playerScore > computerScore) {
    console.log(
      `The Final Score is ${playerScore} to ${computerScore}. You Win!!!`
    );
  } else if (playerScore < computerScore) {
    console.log(
      `The Final Score is ${playerScore} to ${computerScore}. You Lose!!!`
    );
  } else {
    console.log(
      `The Final Score is ${playerScore} to ${computerScore}. Draw!!!`
    );
  }
};

// game();
console.log(playerScore, computerScore);
playRound();
