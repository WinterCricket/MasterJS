var liElements = document.getElementsByTagName("li");
var howManyLi = liElements.length;
for (var i = 0; i < howManyLi; i++) {
  if (liElements[i].innerHTML === "") {
    liElements[i].innerHTML = [i + 1] + " Coming Soon to a Venue Near You!";
  }
}

console.log(liElements);

console.log(howManyLi);

function HouseKeeper(name, age, hasWorkPermit, languages, topSkill, permitted) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
  this.topSkill = topSkill;
  this.permitted = function () {
    if (HouseKeeper.hasWorkPermit) {
      alert(
        "I'm " +
          this.name +
          ". I speak " +
          this.languages +
          "Pay me a lot of cash."
      );
    } else {
      alert(
        "I'm " +
          this.name +
          ". I speak " +
          this.languages +
          "Spank me, master! I have no labor union."
      );
    }
  };
}

let houseKeeper1 = new HouseKeeper(
  "Ria Dyanos",
  34,
  true,
  ["French", "Dutch", "Portuguese", "English"],
  "fast clean"
);
houseKeeper1.permitted();
// let houseKeeper2 = new HouseKeeper(
//   "Olga Olgala",
//   101,
//   false,
//   [" French", " English", " Pigeon", " ASL"],
//   "corny jokes"
// );

// alert(
//   `I'm ${houseKeeper2.name}, your ${houseKeeper2.topSkill} housekeeper. I speak ${houseKeeper2.languages}.`
// );
