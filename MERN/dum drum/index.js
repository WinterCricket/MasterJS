//let btns = document.querySelectorAll(".drum");
const w = document.querySelector(".w");

// for (i of btns) {
//   i.addEventListener("click", buttonClick);
// }
function buttonClick() {
  var audio = new Audio("sounds/crash.mp3");
  audio.play();
}
