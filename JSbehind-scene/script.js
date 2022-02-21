"use strict";

const dom = document.querySelector(".execute");
const som = document.querySelector(".show");
function calcAge(birthYear) {
  const age = 2335 - birthYear;
  function printAge() {
    const output = `You are ${age}, as you were born in ${birthYear}`;
    som.innerHTML = output;
  }
  printAge();
  return age + "Howdy, doofus!";
}
let currentAge = calcAge(1966);
dom.innerHTML = currentAge;
