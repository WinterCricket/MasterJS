"use strict";
//const percentage = document.querySelector(".output");
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

// function isLeap(year) {
//   if (year % 400 === 0) {
//     return `Leap year.`;
//   } else if (year % 4 === 0 && year % 100 !== 0) {
//     return `Leap year.`;
//   } else {
//     return `Not leap year.`;
//   }
// }

// let leap = isLeap(1930);
// percentage.innerHTML = leap;

// const guestList = ["Jack", "Anton", "Billy", "Sammy", "Susan"];

// const guestName = prompt("What's your name, please?");

// if (guestList.indexOf(guestName) !== -1) {
//   alert(`Welcome, ${guestName}!`);
// } else {
//   alert(`Call security and please remove ${guestName} from the club!`);
// }

// let output = [];
// function fizzbuzz() {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 15 === 0) {
//       output.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//       output.push("Fizz");
//     } else if (i % 5 === 0) {
//       output.push("Buzz");
//     } else {
//       output.push(i);
//     }
//   }
//   console.log(output);
// }
// fizzbuzz();

// let output = [];
// let count = 1;

// function fizzbuzz() {
//   count++;
//   if (count % 15 === 0) {
//     output.push("FizzBuzz");
//   } else if (count % 3 === 0) {
//     output.push("Fizz");
//   } else if (count % 5 === 0) {
//     output.push("Buzz");
//   } else {
//     output.push(count);
//   }
//   console.log(output);
// }

// fizzbuzz();
// let names;

// function whoIsPaying(names) {
//   let index = Math.floor(Math.random() * names.length);
//   let output = `${names[index]} is going to buy lunch today.`;

//   console.log(output);
// }
// whoIsPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]);

//while loop fizz buzz
// let output = [];
// let count = 20;

// function fizzbuzz() {
//   while (count > 0) {
//     if (count % 15 === 0) {
//       output.push("FizzBuzz");
//     } else if (count % 3 === 0) {
//       output.push("Fizz");
//     } else if (count % 5 === 0) {
//       output.push("Buzz");
//     } else {
//       output.push(count);
//     }
//     count--;
//   }
//   console.log(output);
// }
// fizzbuzz();

//bottles of beer
// function beer() {
//   let bottles = 99;

//   while (bottles >= 1) {
//     let bottleWd = "bottles";
//     if (bottles === 1) {
//       bottleWd = "bottle";
//     }

//     console.log(bottles + " " + bottleWd + " of beer, " + bottles + "!");
//     console.log(" Take one down and pass it around, ");

//     bottles--;
//     if (bottles === 1) {
//       bottleWd = "bottle";
//     }
//     if (bottles === 0) {
//       bottleWd = "bottles";
//       console.log("No bottles left!");
//     }
//     console.log(bottles + " " + bottleWd + "  of beer...");
//   }
// }
// beer();

//fibonacci seq
//index 0 = 0 i 1 = 1 i 2 = 1
// function fib(n) {
//   let n1 = 0,
//     n2 = 1,
//     nextTerm;

//   for (let i = 1; i < n; i++) {
//     console.log(n1);

//     nextTerm = n1 + n2;

//     n1 = n2;

//     n2 = nextTerm;
//   }
//   console.log(nextTerm);
// }
// fib(3);

// const number = parseInt(prompt("Enter a positive number: "));
// let n1 = 0,
//   n2 = 1,
//   nextTerm;

// console.log("Fibonacci Series:");
// console.log(n1); // print 0
// console.log(n2); // print 1

// nextTerm = n1 + n2;

// while (nextTerm <= number) {
//   // print the next term
//   console.log(nextTerm);

//   n1 = n2;
//   n2 = nextTerm;
//   nextTerm = n1 + n2;
// }
function fib(n) {
  let array = [];
  let n1 = 0,
    n2 = 1,
    nextTerm;

  for (let i = 1; i <= n; i++) {
    array.push(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  console.log(array);
}
fib(6);
