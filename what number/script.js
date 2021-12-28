"use strict";

// document.querySelector(".message").innerHTML = "Number Thumper!";
// console.log(document.querySelector(".message").innerHTML);
// console.log((document.querySelector(".guess").value = 16));
// console.log(document.querySelector(".guess").value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
const classMess = document.querySelector(".message");
document.querySelector(".number").textContent = secretNumber;

// function againFunc (){
//   Number(document.querySelector(".guess").reset() );
// }
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //no guess made
  if (!guess) {
    classMess.textContent = "⛔No Number!⛔";
    // guess is correct
  } else if (guess === secretNumber) {
    classMess.textContent = "🎁You got it right! You win!🎈";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").innerHTML = secretNumber;
    //guess is to high
  } else if (guess > secretNumber) {
    if (score > 1) {
      classMess.textContent = "⬇Guess lower!⬇";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      classMess.textContent = "🛑You lost! Round over.🛑";
      document.querySelector(".score").textContent = 0;
    }
    //guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      classMess.textContent = "⬆Guess higher!⬆";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      classMess.textContent = "🛑You lost! Round over.🛑";
      document.querySelector(".score").textContent = 0;
    }
  }
});
