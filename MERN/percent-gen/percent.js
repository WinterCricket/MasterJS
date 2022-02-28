const percentage = document.querySelector(".output");
let rnd = Math.random();
rnd = rnd * 100;
rnd = Math.floor(rnd) + 1;

// Math.floor(1 - 100);
// const n = rnd + 1;
console.log(rnd);

percentage.innerHTML = rnd;
