const header = document.querySelector("h1");
const die1 = document.querySelector(".img1");
const die2 = document.querySelector(".img2");
let roll1 = Math.floor(Math.random() * 5) + 1;
let roll2 = Math.floor(Math.random() * 5) + 1;
// die1.src = `images/dice${roll1}.png`;
// die2.src = `images/dice${roll2}.png`;

let source1 = "images/dice" + roll1 + ".png";
let source2 = "images/dice" + roll2 + ".png";
die1.setAttribute("src", source1);
die2.setAttribute("src", source2);
if (roll1 > roll2) {
  header.innerHTML = "Player 1 is a Winner!🚩";
} else if (roll1 < roll2) {
  header.innerHTML = "PLayer 2 is a Winner!🏁";
} else {
  header.innerHTML = "Draw!🎌";
}
