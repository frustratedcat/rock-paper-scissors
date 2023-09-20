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

const playRound = function (playerSelection, computerSelection) {
  playerSelection = function (type, selector, callback) {
    document.addEventListener(type, (e) => {
      if (e.target.matches(selector)) callback(e.target);
    });
  };

  const computerChoice = function () {
    computerSelection = getComputerChoice();
    if (computerSelection === "rock") {
      computerResult.textContent = "rock";
    } else if (computerSelection === "paper") {
      computerResult.textContent = "paper";
    } else {
      computerResult.textContent = "scissors";
    }
  };

  playerSelection("click", ".btn", (e) => {
    if (e.classList[1] === "btn-rock") {
      playerResult.textContent = "rock";
      computerChoice();
    } else if (e.classList[1] === "btn-paper") {
      playerResult.textContent = "paper";
      computerChoice();
    } else if (e.classList[1] === "btn-scissors") {
      playerResult.textContent = "scissors";
      computerChoice();
    }

    if (playerResult.textContent === "rock" && computerSelection === "paper") {
      computerScore++;
    } else if (
      playerResult.textContent === "rock" &&
      computerSelection === "scissors"
    ) {
      playerScore++;
    } else if (
      playerResult.textContent === "paper" &&
      computerSelection === "rock"
    ) {
      playerScore++;
    } else if (
      playerResult.textContent === "paper" &&
      computerSelection === "scissors"
    ) {
      computerScore++;
    } else if (
      playerResult.textContent === "scissors" &&
      computerSelection === "rock"
    ) {
      computerScore++;
    } else if (
      playerResult.textContent === "scissors" &&
      computerSelection === "paper"
    ) {
      playerScore++;
    }

    playerScoreResult.textContent = playerScore;
    computerScoreResult.textContent = computerScore;
  });
};

const game = function () {
  let round = 1;
  while (playerScore < 5 || computerScore < 5) {
    console.log(`Round ${round}: ${playRound()}`);
    console.log(`Your Score: ${playerScore}\nComputer Score: ${computerScore}`);
    round++;
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
playRound();
