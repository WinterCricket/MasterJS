const die1 = document.querySelector(".img1");
const die2 = document.querySelector(".img2");
let roll1 = Math.floor(Math.random() * 5) + 1;
let roll2 = Math.floor(Math.random() * 5) + 1;
die1.src = `images/dice${roll1}.png`;
die2.src = `images/dice${roll2}.png`;
