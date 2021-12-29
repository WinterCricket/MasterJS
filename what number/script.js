"use strict";

// document.querySelector(".message").innerHTML = "Number Thumper!";
// console.log(document.querySelector(".message").innerHTML);
// console.log((document.querySelector(".guess").value = 16));
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = document.querySelector(".message");
//document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //console.log(guess, typeof guess);

  //no guess made
  if (!guess) {
    displayMessage.textContent = "⛔No Number!⛔";
    // guess is correct
  } else if (guess === secretNumber) {
    displayMessage.textContent = "🎁You got it right! You win!🎈";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").innerHTML = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highScore").innerHTML = highScore;
    }

    //guess different from secret
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage.textContent =
        guess > secretNumber ? "⬇Guess lower!⬇" : "⬆Guess higher!⬆";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage.textContent = "🛑You lost! Round over.🛑";
      document.querySelector(".score").textContent = 0;
    }
  }
  //guess is too low
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  displayMessage.textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
});
