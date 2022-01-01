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

const coder = {
  name: "Josh Brolan",
  language: "French",
  ageCalc: function (birthYear, today) {
    console.log(`${coder.name}, you are now ${today - birthYear} years old.`);
  },
};
coder.ageCalc(1966, 2008);
coder.college = "Warren Wilson College";
