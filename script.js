"use strict";

const playerResult = document.querySelector(".player-result");
const computerResult = document.querySelector(".computer-result");

let playerScore = 0;
const playerScoreResult = document.querySelector(".player-score");

let computerScore = 0;
const computerScoreResult = document.querySelector(".computer-score");

let clicked = false;

let buttons = document.querySelectorAll(".btn");
const btnContainer = document.querySelector(".btn-container");
const rockButton = document.querySelector(".btn-rock");
const paperButton = document.querySelector(".btn-paper");
const scissorsButton = document.querySelector(".btn-scissors");

let playAgainButtons = document.querySelectorAll(".play-buttons");
const playAgain = document.querySelector(".play-again");
const playAgainyes = document.querySelector(".play-again-yes");
const playAgainNo = document.querySelector(".play-again-no");

const showWinnerContainer = document.querySelector(".show-winner-container");
const showWinner = document.querySelector(".show-winner");

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
      } else if (
        playerResult.textContent === "rock" &&
        computerResult.textContent === "scissors"
      ) {
        playerScore++;
      } else if (
        playerResult.textContent === "paper" &&
        computerResult.textContent === "rock"
      ) {
        playerScore++;
      } else if (
        playerResult.textContent === "paper" &&
        computerResult.textContent === "scissors"
      ) {
        computerScore++;
      } else if (
        playerResult.textContent === "scissors" &&
        computerResult.textContent === "rock"
      ) {
        computerScore++;
      } else if (
        playerResult.textContent === "scissors" &&
        computerResult.textContent === "paper"
      ) {
        playerScore++;
      } else if (
        playerResult.textContent === "rock" &&
        computerResult.textContent === "rock"
      ) {
      } else if (
        playerResult.textContent === "paper" &&
        computerResult.textContent === "paper"
      ) {
      } else if (
        playerResult.textContent === "scissors" &&
        computerResult.textContent === "scissors"
      ) {
      }
      playerScoreResult.textContent = playerScore;
      computerScoreResult.textContent = computerScore;
    });
  }
};

const chooseWinner = function () {
  if (playerScore === 5 || computerScore === 5) {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    btnContainer.setAttribute("style", "display: none");

    showWinnerContainer.setAttribute("style", "display: contents");

    if (playerScore > computerScore) {
      showWinner.textContent = "You Win!!!";
    } else {
      showWinner.textContent = "Computer Wins!!!";
    }

    playAgain.setAttribute("style", "display: contents");
  }
};

const game = function () {
  playRound();

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      clicked = true;
      chooseWinner();
    });
  }
};

game();
