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
  console.log(`computer selection: ${computerSelection}`);
  return computerSelection;
};

const getPlayerChoice = function () {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (e) {
      if (e.target.matches(".btn")) {
        if (e.target.classList[1] === "btn-rock") {
          playerResult.textContent = "rock";
        } else if (e.target.classList[1] === "btn-paper") {
          playerResult.textContent = "paper";
        } else {
          playerResult.textContent = "scissors";
        }
        console.log(`player selection: ${playerResult.textContent}`);
      }
    });
  }
};

const showPlayerChoice = function () {
  getPlayerChoice();

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      clicked = true;

      if (clicked === true) {
        showComputerChoice();
      }
    });
  }
};

const playRound = function () {
  showPlayerChoice();

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      clicked = true;

      if (
        playerResult.textContent === "rock" &&
        computerResult.textContent === "paper"
      ) {
        computerScore++;
        console.log(playerScore, computerScore);
      } else if (
        playerResult.textContent === "rock" &&
        computerResult.textContent === "scissors"
      ) {
        playerScore++;
        console.log(playerScore, computerScore);
      } else if (
        playerResult.textContent === "paper" &&
        computerResult.textContent === "rock"
      ) {
        playerScore++;
        console.log(playerScore, computerScore);
      } else if (
        playerResult.textContent === "paper" &&
        computerResult.textContent === "scissors"
      ) {
        computerScore++;
        console.log(playerScore, computerScore);
      } else if (
        playerResult.textContent === "scissors" &&
        computerResult.textContent === "rock"
      ) {
        computerScore++;
        console.log(playerScore, computerScore);
      } else if (
        playerResult.textContent === "scissors" &&
        computerResult.textContent === "paper"
      ) {
        playerScore++;
        console.log(playerScore, computerScore);
      } else if (
        playerResult.textContent === "rock" &&
        computerResult.textContent === "rock"
      ) {
        console.log(playerScore, computerScore);
      } else if (
        playerResult.textContent === "paper" &&
        computerResult.textContent === "paper"
      ) {
        console.log(playerScore, computerScore);
      } else if (
        playerResult.textContent === "scissors" &&
        computerResult.textContent === "scissors"
      ) {
        console.log(playerScore, computerScore);
      }
      playerScoreResult.textContent = playerScore;
      computerScoreResult.textContent = computerScore;
    });
  }
};

const game = function () {
  playRound();
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      clicked = true;
      console.log("clicked");
    });
  }
};

game();
