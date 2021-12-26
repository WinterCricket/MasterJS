"use strict";

// document.querySelector(".message").innerHTML = "Number Thumper!";
// console.log(document.querySelector(".message").innerHTML);
// console.log((document.querySelector(".guess").value = 16));
// console.log(document.querySelector(".guess").value);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").innerHTML = "⛔No Number!⛔";
  }
});
