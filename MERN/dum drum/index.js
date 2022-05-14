var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // this.style.color = "white";
    var buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
      case "w":
        var crash = new Audio("sounds/crash.png");
        crash.play();
        break;
      case "a":
        var kick = new Audio("sounds/kick.png");
        kick.play();
        break;

      default:
        console.log(buttonInnerHtml);
    }
  });
}
