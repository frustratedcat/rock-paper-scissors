"use strict";

const introSection = document.querySelector(".intro-section");
const introContainer = document.querySelector(".intro-container");
const introButton = document.querySelector(".intro-button");
const bodySection = document.querySelector(".body-section");
const gameBodySection = document.querySelector(".game-body-section");

const choiceContainer = document.querySelector(".choice-container");
const playerResult = document.querySelector(".player-result");
const computerResult = document.querySelector(".computer-result");
const scoreContainer = document.querySelector(".score-container");

let playerScore = 0;
const playerScoreResult = document.querySelector(".player-score");

let computerScore = 0;
const computerScoreResult = document.querySelector(".computer-score");

let buttons = document.querySelectorAll(".btn");
const btnContainer = document.querySelector(".btn-container");
const rockButton = document.querySelector(".btn-rock");
const paperButton = document.querySelector(".btn-paper");
const scissorsButton = document.querySelector(".btn-scissors");

let playAgainButtons = document.querySelectorAll(".play-buttons");
const playAgain = document.querySelector(".play-again");
const playAgainYes = document.querySelector(".play-again-yes");
const playAgainNo = document.querySelector(".play-again-no");

const showWinnerContainer = document.querySelector(".show-winner-container");
const showWinner = document.querySelector(".show-winner");
const showGame = document.querySelector(".show-game");

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
    computerResult.classList.add("choose-rock");
    computerResult.classList.remove("choose-paper", "choose-scissors");
  } else if (computerSelection === "paper") {
    computerResult.textContent = "paper";
    computerResult.classList.add("choose-paper");
    computerResult.classList.remove("choose-rock", "choose-scissors");
  } else {
    computerResult.textContent = "scissors";
    computerResult.classList.add("choose-scissors");
    computerResult.classList.remove("choose-paper", "choose-rock");
  }

  return computerSelection;
};

const getPlayerChoice = function () {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (e) {
      if (e.target.matches(".btn")) {
        if (e.target.classList[1] === "btn-rock") {
          playerResult.textContent = "rock";
          playerResult.classList.add("choose-rock");
          playerResult.classList.remove("choose-paper", "choose-scissors");
        } else if (e.target.classList[1] === "btn-paper") {
          playerResult.textContent = "paper";
          playerResult.classList.remove("choose-rock", "choose-scissors");
          playerResult.classList.add("choose-paper");
        } else if (e.target.classList[1] === "btn-scissors") {
          playerResult.textContent = "scissors";
          playerResult.classList.add("choose-scissors");
          playerResult.classList.remove("choose-paper", "choose-rock");
        }
      }
    });
  }
};

const showPlayerChoice = function () {
  getPlayerChoice();
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      showComputerChoice();
    });
  }
};

const playRound = function () {
  showPlayerChoice();
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
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
    gameBodySection.classList.remove("show-elements");
    showWinnerContainer.classList.add("show-elements");

    if (playerScore > computerScore) {
      showWinner.textContent = "You Win!!!";
    } else {
      showWinner.textContent = "Computer Wins!!!";
    }

    playAgain.classList.add("show-elements");

    playerScore = 0;
    computerScore = 0;
    playerScoreResult.textContent = playerScore;
    computerScoreResult.textContent = computerScore;

    playerResult.textContent = "Awaiting Player Choice";
    computerResult.textContent = "Awaiting Computer Choice";
  }
};

const playGameAgain = function () {
  for (let i = 0; i < playAgainButtons.length; i++) {
    playAgainButtons[i].addEventListener("click", function (e) {
      computerResult.classList.remove(
        "choose-rock",
        "choose-paper",
        "choose-scissors"
      );
      playerResult.classList.remove(
        "choose-rock",
        "choose-paper",
        "choose-scissors"
      );
      if (e.target.matches(".play-buttons")) {
        if (e.target.classList[1] === "play-again-yes") {
          gameBodySection.classList.add("show-elements");
          showWinnerContainer.classList.remove("show-elements");
          playAgain.classList.remove("show-elements");
        } else if (e.target.classList[1] === "play-again-no") {
          showWinnerContainer.classList.remove("show-elements");
          playAgain.classList.remove("show-elements");
          introSection.classList.add("show-elements");
        }
      }
    });
  }
};

const game = function () {
  introButton.addEventListener("click", function () {
    introSection.classList.add("hide-elements");
    introSection.classList.remove("show-elements");
    gameBodySection.classList.add("show-elements");
  });

  playRound();

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      chooseWinner();
      playGameAgain();
    });
  }
};

game();
