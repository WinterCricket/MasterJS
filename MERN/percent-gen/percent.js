const percentage = document.querySelector(".output");
// let rnd = Math.random();
// rnd = rnd * 100;
// rnd = Math.floor(rnd) + 1;

// // console.log(rnd);

// // percentage.innerHTML = rnd;

// let username = prompt("What is your name?");
// prompt("What is the other's name?");

// if (rnd < 70 && rnd > 50) {
//   alert(
//     `${username}, you have a ${rnd}% chance of being a match, which is okay. Go for it, but don't expect it to last!`
//   );
// } else if (rnd > 70 && rnd < 100) {
//   alert(
//     `${username}, you have a ${rnd}% chance of being a match, which makes this pretty good. This could be the real thing!`
//   );
// } else if (rnd === 100) {
//   alert(
//     `${username}, you have a ${rnd}% chance of being a match, which is insanely perfect. Let nothing get in your way!`
//   );
// } else {
//   alert(
//     `${username}, you have a ${rnd}% chance of being a match, which is crap. Go home and do something productive instead!`
//   );
// }
// function bmiCalculator(weight, height) {
//   const bmi = (weight * 703) / (height * height);
//   if (bmi < 18.5) {
//     interpretation = `Your BMI is ${bmi}, so you are underweight.`;
//   } else if (bmi > 18.5 && bmi < 24.9) {
//     interpretation = `Your BMI is ${bmi}, so you have a normal weight.`;
//   } else {
//     interpretation = `Your BMI is ${bmi}. so you are overweight.`;
//   }
// }
// bmiCalculator(160, 71);

function leapYearCheck(year) {
  if (year % 400 === 0) {
    output = `Leap Year!`;
  } else if (year % 100 === 0) {
    output = `Not Leap Year!`;
  } else if (year % 4 === 0) {
    output = `Leap Year!`;
  } else {
    output = `Not Leap Year!`;
  }
  console.log(output);
}

leapYearCheck(1904);
