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
    computerResult.innerHTML = '<i class="fa-regular fa-hand-back-fist"></i>';
    computerResult.classList.add("choose-rock");
    computerResult.classList.remove("choose-paper", "choose-scissors");
  } else if (computerSelection === "paper") {
    computerResult.innerHTML = '<i class="fa-regular fa-hand"></i>';
    computerResult.classList.add("choose-paper");
    computerResult.classList.remove("choose-rock", "choose-scissors");
  } else {
    computerResult.innerHTML = '<i class= "fa-regular fa-hand-scissors"></i>';
    computerResult.classList.add("choose-scissors");
    computerResult.classList.remove("choose-paper", "choose-rock");
  }

  return computerSelection;
};

const getPlayerChoice = function () {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (e) {
      if (e.target.matches(".btn")) {
        playerResult.innerHTML = "";
        playerResult.classList.add("icons");
        if (e.target.classList[1] === "btn-rock") {
          playerResult.classList.add("rock", "choose-rock");
          playerResult.classList.remove(
            "paper",
            "scissors",
            "choose-paper",
            "choose-scissors"
          );
        } else if (e.target.classList[1] === "btn-paper") {
          playerResult.classList.add("paper", "choose-paper");
          playerResult.classList.remove(
            "rock",
            "scissors",
            "choose-rock",
            "choose-scissors"
          );
        } else if (e.target.classList[1] === "btn-scissors") {
          playerResult.classList.add("scissors", "choose-scissors");
          playerResult.classList.remove(
            "paper",
            "rock",
            "choose-paper",
            "choose-rock"
          );
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
        playerResult.classList[3] === "choose-rock" &&
        computerResult.classList[1] === "choose-paper"
      ) {
        computerScore++;
      } else if (
        playerResult.classList[3] === "choose-rock" &&
        computerResult.classList[1] === "choose-scissors"
      ) {
        playerScore++;
      } else if (
        playerResult.classList[3] === "choose-paper" &&
        computerResult.classList[1] === "choose-rock"
      ) {
        playerScore++;
      } else if (
        playerResult.classList[3] === "choose-paper" &&
        computerResult.classList[1] === "choose-scissors"
      ) {
        computerScore++;
      } else if (
        playerResult.classList[3] === "choose-scissors" &&
        computerResult.classList[1] === "choose-rock"
      ) {
        computerScore++;
      } else if (
        playerResult.classList[3] === "choose-scissors" &&
        computerResult.classList[1] === "choose-paper"
      ) {
        playerScore++;
      } else if (
        playerResult.classList[3] === "choose-rock" &&
        computerResult.classList[1] === "choose-rock"
      ) {
      } else if (
        playerResult.classList[3] === "choose-paper" &&
        computerResult.classList[1] === "choose-paper"
      ) {
      } else if (
        playerResult.classList[3] === "choose-scissors" &&
        computerResult.classList[1] === "choose-scissors"
      ) {
      }
      playerScoreResult.textContent = playerScore;
      computerScoreResult.textContent = computerScore;
      if (playerScore > computerScore) {
        playerScoreResult.classList.add("player-winning");
        playerScoreResult.classList.remove("computer-winning");
        computerScoreResult.classList.add("player-winning");
        computerScoreResult.classList.remove("computer-winning");
      } else if (computerScore > playerScore) {
        playerScoreResult.classList.remove("player-winning");
        playerScoreResult.classList.add("computer-winning");
        computerScoreResult.classList.remove("player-winning");
        computerScoreResult.classList.add("computer-winning");
      } else {
        playerScoreResult.classList.remove("player-winning");
        playerScoreResult.classList.remove("computer-winning");
        computerScoreResult.classList.remove("player-winning");
        computerScoreResult.classList.remove("computer-winning");
      }
    });
  }
};

const chooseWinner = function () {
  if (playerScore === 5 || computerScore === 5) {
    gameBodySection.classList.remove("show-elements");
    showWinnerContainer.classList.add("show-elements");

    if (playerScore > computerScore) {
      showWinner.textContent = "You Win!!!";
      showWinner.classList.add("player-winning");
      showWinner.classList.remove("computer-winning");
    } else {
      showWinner.textContent = "Computer Wins!!!";
      showWinner.classList.remove("player-winning");
      showWinner.classList.add("computer-winning");
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
        "icons",
        "rock",
        "paper",
        "scissors",
        "choose-rock",
        "choose-paper",
        "choose-scissors"
      );
      playerResult.classList.remove(
        "icons",
        "rock",
        "paper",
        "scissors",
        "choose-rock",
        "choose-paper",
        "choose-scissors"
      );

      playerScoreResult.classList.remove("player-winning");
      playerScoreResult.classList.remove("computer-winning");
      computerScoreResult.classList.remove("player-winning");
      computerScoreResult.classList.remove("computer-winning");

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
