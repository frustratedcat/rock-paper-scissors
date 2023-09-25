"use strict";

let playerResult = document.querySelector(".player-result");
let computerResult = document.querySelector(".computer-result");

let playerScore = 0;
let playerScoreResult = document.querySelector(".player-score");

let computerScore = 0;
let computerScoreResult = document.querySelector(".computer-score");

let clicked = false;
let buttons = document.querySelectorAll(".btn");

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

const showComputerChoice = function (computerSelection) {
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

const getPlayerChoice = function () {
  document.addEventListener("click", function (e) {
    if (e.target.matches(".btn")) {
      if (e.target.classList[1] === "btn-rock") {
        playerResult.textContent = "rock";
      } else if (e.target.classList[1] === "btn-paper") {
        playerResult.textContent = "paper";
      } else {
        playerResult.textContent = "scissors";
      }
    }
  });
};

const showPlayerChoice = function () {
  getPlayerChoice();

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      clicked = true;
      console.log(clicked);
      if (clicked === true) {
        showComputerChoice();
      }
    });
  }
};

showPlayerChoice();

const playRound = function () {};

const game = function () {};
