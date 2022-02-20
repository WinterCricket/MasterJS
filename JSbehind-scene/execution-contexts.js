const show = document.querySelector(".execute");

const name = "The Fool";

const first = () => {
  let a = 1;
  const b = second(7, 9);
  a = a + b;
  return a;
};

function second(x, y) {
  var c = 2;
  return c;
}

const x = first();
// show.innerHTML = x;
console.log(x);
