const percentage = document.querySelector(".output");
let rnd = Math.random();
rnd = rnd * 100;
rnd = Math.floor(rnd) + 1;

// console.log(rnd);

// percentage.innerHTML = rnd;

let username = prompt("What are your names?");
alert(`${username}, you have a ${rnd}% chance of being a match.`);
