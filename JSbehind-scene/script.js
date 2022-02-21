"use strict";

const dom = document.querySelector(".execute");
const som = document.querySelector(".show");
function calcAge(birthYear) {
  const age = 2335 - birthYear;
  function printAge() {
    const output = `${firstName}, you are ${age}, as you were born in ${birthYear}`;
    som.innerHTML = output;
  }
  printAge();
  return age + "Howdy, doofus!";
}
const firstName = "Geordie";
calcAge(1966);
