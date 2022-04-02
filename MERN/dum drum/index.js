let btns = document.querySelectorAll(".drum");

for (i of btns) {
  i.addEventListener("click", buttonClick);
}
function buttonClick() {
  alert("Button Clicked!");
}
