"use strict";

// document.querySelector(".message").innerHTML = "Number Thumper!";
// console.log(document.querySelector(".message").innerHTML);
// console.log((document.querySelector(".guess").value = 16));
// console.log(document.querySelector(".guess").value);

document.querySelector(".check").addEventListener("click", function () {
  console.log(document.querySelector(".guess").value);
  document.querySelector(".message").innerHTML = "Number Thumper!";
});
