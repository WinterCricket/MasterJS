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
    if (this.hasWorkPermit) {
      alert(
        `I'm ${this.name}, your ${this.topSkill} housekeeper. I speak ${this.languages}. I'm legit, so pay me a lot of cash.`
      );
    } else {
      alert(
        `I'm ${this.name}, your ${this.topSkill} housekeeper. I speak ${this.languages}. Spank me, master! I have no labor union.`
      );
    }
  };
}

// let houseKeeper1 = new HouseKeeper(
//   "Ria Dyanos",
//   34,
//   true,
//   ["French", "Dutch", "Portuguese", "English"],
//   "fast clean"
// );
// houseKeeper1.permitted();
let houseKeeper2 = new HouseKeeper(
  "Olga Olgala",
  101,
  false,
  [" French", " English", " Pigeon", " ASL"],
  "corny jokes"
);
// houseKeeper2.permitted();
