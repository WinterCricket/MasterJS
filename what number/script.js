"use strict";

// document.querySelector(".message").innerHTML = "Number Thumper!";
// console.log(document.querySelector(".message").innerHTML);
// console.log((document.querySelector(".guess").value = 16));
// console.log(document.querySelector(".guess").value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
const classMess = document.querySelector(".message");
//document.querySelector(".number").innerHTML = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //no guess made
  if (!guess) {
    classMess.innerHTML = "⛔No Number!⛔";
    // guess is correct
  } else if (guess === secretNumber) {
    classMess.innerHTML = "🎁You got it right! You win!🎈";
    document.querySelector("body").style.backgroundColor = "green";
    //guess is to high
  } else if (guess > secretNumber) {
    if (score > 1) {
      classMess.innerHTML = "⬇Guess lower!⬇";
      score--;
      document.querySelector(".score").innerHTML = score;
    } else {
      classMess.innerHTML = "🛑You lost! Round over.🛑";
      document.querySelector(".score").innerHTML = 0;
    }
    //guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      classMess.innerHTML = "⬆Guess higher!⬆";
      score--;
      document.querySelector(".score").innerHTML = score;
    } else {
      classMess.innerHTML = "🛑You lost! Round over.🛑";
      document.querySelector(".score").innerHTML = 0;
    }
  }
});
