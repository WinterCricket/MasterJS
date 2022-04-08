let btns = document.querySelectorAll(".drum");

for (i of btns) {
  i.addEventListener("click", buttonClick);
}
function buttonClick() {
  alert("Button Clicked!");
}

function add(put1, put2) {
  return put1 + put2;
}
function subtract(put1, put2) {
  return put1 - put2;
}

function multiply(put1, put2) {
  return put1 * put2;
}
function divide(put1, put2) {
  return put1 / put2;
}
function calculator(put1, put2, operator) {
  return operator(put1, put2);
}
//console.log(operator(3, 6, multipad));

document.querySelector("footer").innerHTML = calculator(3, 6, subtract);
