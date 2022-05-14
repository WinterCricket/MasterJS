var liElements = document.getElementsByTagName("li");
var howManyLi = liElements.length;
for (var i = 0; i < howManyLi; i++) {
  if (liElements[i].innerHTML === "") {
    liElements[i].innerHTML = "Coming Soon to a Venue Near You!";
  }
}

console.log(liElements);

console.log(howManyLi);
