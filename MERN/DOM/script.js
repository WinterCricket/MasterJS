"strict use";

document.querySelector("ul").lastElementChild.innerHTML =
  "Goethe, after Shakespeare, wrote the sentence.";
const btn = document.getElementsByClassName("btn")[0].style;
btn.color = "red";
btn.backgroundColor = "black";
btn.borderRadius = "20px";

const h1 = document.querySelector("h1");
h1.style.fontSize = "6rem";
h1.style.visibility = ".hide";
document.querySelector("button").classList.remove("hide");
