"use strict";

// document.querySelector(".message").innerHTML = "Number Thumper!";
// console.log(document.querySelector(".message").innerHTML);
// console.log((document.querySelector(".guess").value = 16));
// console.log(document.querySelector(".guess").value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
const classMess = document.querySelector(".message");
document.querySelector(".number").innerHTML = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    classMess.innerHTML = "⛔No Number!⛔";
  } else if (guess === secretNumber) {
    classMess.innerHTML = "🎁You got it right! You win!🎈";
  } else if (guess > secretNumber) {
    classMess.innerHTML = "⬇Guess lower!⬇";
    score--;
    document.querySelector(".score").innerHTML = score;
  } else if (guess < secretNumber) {
    classMess.innerHTML = "⬆Guess higher!⬆";
    score--;
    document.querySelector(".score").innerHTML = score;
  }
});
