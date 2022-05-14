let liElements = getElementsByTagName("li");
let howManyLi = liElements.length;
for (let i = 0; i < howManyLi; i++) {
  if (liElements[i].innerHTML === "") {
    liElements[i].innerHTML = "Coming Soon to a Venue Near You!";
  }
}
