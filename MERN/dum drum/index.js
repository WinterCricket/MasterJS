const numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // this.style.color = "white";
    console.log(this.audio);
  });
}

var audio = new Audio("sounds");
audio.play();
