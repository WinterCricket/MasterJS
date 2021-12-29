"use strict";

// document.querySelector(".message").innerHTML = "Number Thumper!";
// console.log(document.querySelector(".message").innerHTML);
// console.log((document.querySelector(".guess").value = 16));
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const scoreCard = function (score) {
  document.querySelector(".score").textContent = score;
};

const numberDisplay = function (number) {
  document.querySelector(".number").innerHTML = number;
};

const guessValue = function (value) {
  document.querySelector(".guess").value = value;
};

const highScoreVal = function (highScore) {
  document.querySelector(".highScore").innerHTML = highScore;
};

document.querySelector(".check").addEventListener("click", function () {
  //can't put guess numbered into function here
  const guess = Number(document.querySelector(".guess").value);
  //console.log(guess, typeof guess);

  //no guess made
  if (!guess) {
    displayMessage("⛔No Number!⛔");
    // guess is correct
  } else if (guess === secretNumber) {
    displayMessage("🎁You got it right! You win!🎈");
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    numberDisplay(secretNumber);
    if (score > highScore) {
      highScore = score;
      highScoreVal(highScore);
    }

    //guess different from secret
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? "⬇Guess lower!⬇" : "⬆Guess higher!⬆"
      );
      score--;
      scoreCard(score);
    } else {
      displayMessage("🛑You lost! Round over.🛑");
      scoreCard(0);
    }
  }
  //guess is too low
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  numberDisplay("?");
  displayMessage("Start guessing...");
  scoreCard(score);
  guessValue("");
});
