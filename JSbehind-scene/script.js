"use strict";

const birthYear = 1946;
const dom = document.querySelector(".execute");
function calcAge(currentYear) {
  const age = currentYear - birthYear;
  return age;
}
let currentAge = calcAge(2035);
dom.innerHTML = currentAge;
