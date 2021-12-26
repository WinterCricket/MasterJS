"use strict";

// document.querySelector(".message").innerHTML = "Number Thumper!";
// console.log(document.querySelector(".message").innerHTML);
// console.log((document.querySelector(".guess").value = 16));
// console.log(document.querySelector(".guess").value);

const number = Math.trunc(Math.random() * 20) + 1;
const classMess = document.querySelector(".message");
document.querySelector(".number").innerHTML = number;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    classMess.innerHTML = "⛔No Number!⛔";
  } else if (guess === number) {
    classMess.innerHTML = "🎁You got it right! You win!🎈";
  } else {
    classMess.innerHTML = "Guess again!";
  }
});
