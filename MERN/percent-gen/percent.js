const percentage = document.querySelector(".output");
let rnd = Math.random();
rnd = rnd * 100;
rnd = Math.floor(rnd) + 1;

// console.log(rnd);

// percentage.innerHTML = rnd;

let username = prompt("What is your name?");
prompt("What is the other's name?");

if (rnd < 70 && rnd > 50) {
  alert(
    `${username}, you have a ${rnd}% chance of being a match, which is okay. Go for it, but don't expect it to last!`
  );
} else if (rnd > 70 && rnd < 100) {
  alert(
    `${username}, you have a ${rnd}% chance of being a match, which makes this pretty good. This could be the real thing!`
  );
} else if (rnd === 100) {
  alert(
    `${username}, you have a ${rnd}% chance of being a match, which is insanely perfect. Let nothing get in your way!`
  );
} else {
  alert(
    `${username}, you have a ${rnd}% chance of being a match, which is crap. Go home and do something productive instead!`
  );
}
