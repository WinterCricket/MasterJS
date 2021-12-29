"use strict";

// document.querySelector(".message").innerHTML = "Number Thumper!";
// console.log(document.querySelector(".message").innerHTML);
// console.log((document.querySelector(".guess").value = 16));
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const classMess = document.querySelector(".message");
//document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //console.log(guess, typeof guess);

  //no guess made
  if (!guess) {
    classMess.textContent = "⛔No Number!⛔";
    // guess is correct
  } else if (guess === secretNumber) {
    if (score > highScore);
    {
      highScore = score;
      document.querySelector(".highScore").innerHTML = highScore;
    }
    classMess.textContent = "🎁You got it right! You win!🎈";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").innerHTML = secretNumber;

    //guess is to high
  } else if (guess !== secretNumber) {
    document.querySelector(".score").textContent =
      guess > secretNumber
        ? (classMess.textContent = "⬇Guess lower!⬇")
        : (classMess.textContent = "⬆Guess higher!⬆");
    score--;
    document.querySelector(".score").textContent = score;
  }
  if (score < 1) {
    classMess.textContent = "🛑You lost! Round over.🛑";
    document.querySelector(".score").textContent = 0;
  }
  //guess is too low
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
});
