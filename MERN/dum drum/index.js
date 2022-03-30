let btns = document.querySelectorAll("button");

for (i of btns) {
  i.addEventListener("click", handleClick);
}
function handleClick() {
  alert("Button Clicked!");
}
