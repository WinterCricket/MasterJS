const die1 = document.querySelector(".die1");
const die2 = document.querySelector(".die2");
let roll1 = Math.floor(Math.random() * 5) + 1;
img1 = `images/dice${roll1}.png`;
let roll2 = Math.floor(Math.random() * 5) + 1;
img2 = `images/dice${roll2}.png`;
console.log(img1);
