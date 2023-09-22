"use strict";

let playerScore = 0;
let playerScoreResult = document.querySelector(".player-score");

let computerScore = 0;
let computerScoreResult = document.querySelector(".computer-score");

let playerResult = document.querySelector(".player-result");
let computerResult = document.querySelector(".computer-result");

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

const playRound = function () {};

const game = function () {};

computerChoice();
