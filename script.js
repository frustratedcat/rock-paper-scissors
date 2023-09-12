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

const playRound = function (playerSelection, computerSelection) {
  playerSelection = prompt(
    'Choose "Rock" "Paper" or "Scissors"> '
  ).toLowerCase();
  computerSelection = getComputerChoice();

  if (playerSelection === "rock" && computerSelection === "rock") {
    return `Draw, both chose ${playerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return `You lose, ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return `You win, ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return `Draw, both chose ${playerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return `You lose, ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return `You win, ${playerSelection} beats ${computerSelection}`;
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    return `Draw, both chose ${playerSelection}`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return `You lose, ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return `You win, ${playerSelection} beats ${computerSelection}`;
  } else {
    return `${playerSelection} is not a valid choice`;
  }
};

const game = function () {
  console.log(playRound());
  console.log(playRound());
  console.log(playRound());
  console.log(playRound());
  console.log(playRound());
};

game();
