const percentage = document.querySelector(".output");
let rnd = Math.random();
rnd = rnd * 100;
rnd = Math.floor(rnd) + 1;

// console.log(rnd);

// percentage.innerHTML = rnd;

let username = prompt("What is your name?");
prompt("What is the other's name?");
alert(`${username}, you have a ${rnd}% chance of being a match.`);
