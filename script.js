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
let computerScore = 0;

const playRound = function (playerSelection, computerSelection) {
  playerSelection = prompt(
    'Choose "Rock" "Paper" or "Scissors"> '
  ).toLowerCase();
  computerSelection = getComputerChoice();

  if (playerSelection === "rock" && computerSelection === "rock") {
    return `Draw, both chose ${playerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return `You lose, ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return `You win, ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return `Draw, both chose ${playerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return `You lose, ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return `You win, ${playerSelection} beats ${computerSelection}`;
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    return `Draw, both chose ${playerSelection}`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return `You lose, ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return `You win, ${playerSelection} beats ${computerSelection}`;
  } else {
    return `${playerSelection} is not a valid choice`;
  }
};

const game = function () {
  let i = 5;
  let round = 1;
  while (i > 0) {
    console.log(`Round ${round}: ${playRound()}`);
    console.log(`Your Score: ${playerScore}\nComputer Score: ${computerScore}`);
    i--;
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

game();
