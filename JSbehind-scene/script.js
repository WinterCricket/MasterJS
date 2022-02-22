"use strict";

// const dom = document.querySelector(".execute");
// const som = document.querySelector(".show");
// function calcAge(birthYear) {
//   const age = 2335 - birthYear;
//   function printAge() {
//     const output = `${firstName}, you are ${age}, as you were born in ${birthYear}`;
//     som.innerHTML = output;
//   }
//   printAge();
//   return age + "Howdy, doofus!";
// }
// const firstName = "Geordie";
// calcAge(1966);

function calcAge(birthYear) {
  const age = 2022 - birthYear;

  if (age > 18) {
    return console.log(`Welcome to my room!`);
  } else {
    return console.log(`Kids aren't allowed. You're only ${age}!`);
  }
}
calcAge(2008);
