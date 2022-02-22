"use strict";

const dom = document.querySelector(".execute");
const som = document.querySelector(".show");

function calcAge(birthYear) {
  const age = 2022 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, as you were born in ${birthYear}`;
    som.innerHTML = output;

    if (birthYear >= 1965 && birthYear <= 1980) {
      const genX = `${firstName}, you are a gen xer. To the front of the line! Congrats, you youthful ${age}!`;
      dom.innerHTML = genX;
    }
  }

  printAge();
  return age;
}

const firstName = "Geordie";
calcAge(1976);
