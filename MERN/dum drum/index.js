let btns = document.querySelectorAll(".drum");

for (i of btns) {
  i.addEventListener("click", buttonClick);
}
function buttonClick() {
  alert("Button Clicked!");
}

function addad(put1, put1) {
  return put1 + put2;
}

function multipad(put1, put2) {
  return put1 * put2;
}
function operator(put1, put2, operator) {
  return operator(put1, put2);
}
console.log(operator(3, 6, multipad));
