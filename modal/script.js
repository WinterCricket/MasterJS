"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsShowModal = document.querySelectorAll(".show-modal");

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const showModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnsShowModal.length; i++)
  btnsShowModal[i].addEventListener("click", showModal);
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});

const Coder = function (name, language) {
  this.n = name;
  this.lang = language;
};

Coder.prototype.sayHello = function () {
  return "hello there and here!";
};

const todd = new Coder("Ford", "Italian");
const sam = new Coder("Sam");
console.log(todd.n, todd.lang, sam.sayHello());
