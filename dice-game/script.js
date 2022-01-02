"use strict";

const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
score0El.textContent = 0;
score0El.textContent = 0;
diceEl.classList.add("hidden");

let player0 = 0;
let player1 = 0;

btnRoll.addEventListener("click", function () {
  let roll = Math.trunc(Math.random() * 6) + 1;
  score0El.textContent = roll;
  player0 = player0 + roll;
  console.log(player0);
});
btnHold.addEventListener("click", function () {
  player0 = player0;
  document.querySelector("#current--0").textContent = player0;
});

btnRoll.addEventListener("click", function () {
  let roll = Math.trunc(Math.random() * 6) + 1;
  score1El.textContent = roll;
  player1 = player1 + roll;
  console.log(player1);
});
btnHold.addEventListener("click", function () {
  player1 = player1;
  document.querySelector("#current--1").textContent = player1;
});
