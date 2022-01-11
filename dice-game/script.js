"use strict";

const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
//starting conditions
score0El.textContent = 0;
score0El.textContent = 0;
diceEl.classList.add("hidden");

const scores = [0, 0];

let currentScore = 0;
let activePlayer = 0;

// btnNew.addEventListener("click", function () {
//   location.reload();
// });

//player 1 rolling dice function
btnRoll.addEventListener("click", function () {
  //1. gen rndm dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  //2. display dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;
  //3. check for one: if so, switch to next player
  if (dice !== 1) {
    //dice to current score
    currentScore = currentScore + dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});
// btnHold.addEventListener("click", function () {
//   player0 = player0;
//   document.querySelector("#current--0").textContent = player0;
// });

// //player 2

// btnRoll.addEventListener("click", function () {
//   let roll = Math.trunc(Math.random() * 6) + 1;
//   score1El.textContent = roll;
//   player1 = player1 + roll;
//   console.log(player1);
// });
// btnHold.addEventListener("click", function () {
//   player1 = player1;
//   document.querySelector("#current--1").textContent = player1;
// });
