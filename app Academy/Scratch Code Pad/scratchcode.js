// function moveZeroes(nums) {
//set end pointer to array

//   let last = nums.length - 1;

//   //walk through array
//   for (let i = 0; i < last; i++) {
//     //if i element is zero
//     if (nums[i] == 0) {
//       //switch nums element with the last element

//       [nums[i], nums[last]] = [nums[last], nums[i]];

//       //nums.shift();
//       //nums.shift(nums[i]);
//       //then decriment pointer
//       last--;
//     }
//   }
//   return (document.getElementById("scratchpad").innerHTML = nums);
// }

// moveZeroes([0, 1, 0, 3, 12]);
// console.log("First!");

// function callMe() {
//   console.log("Second!");
//   console.log("Third!");
// }

// console.log("Fourth!");
// callMe();
// function whileDuo(arr) {
//   let i = 0;
//   while (i < arr.length) {
//     arr[i] = arr[i] * 2;
//     i++;
//   }
//   return arr;
// }

// let printout = whileDuo([1, 1, 2, 3, 5, 8, 13, 21, 34]);

// document.getElementById("scratchpad").innerHTML = printout;
// function printFives(max) {
//   let i = 0;
//   while (i < max) {
//     console.log(i);
//     i = i + 5;
//   }
// }

// // Example:

// printFives(20);
function getCount(str) {
  let vowelsCount = 0;
  let smallLetters = str.toLowerCase();
  let vowels = ["a", "e", "i", "o", "u"];

  for (let char of smallLetters) {
    if (vowels.includes(char)) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}
//console.log(getCount("forthwith"));
document.getElementById("scratchpad").innerHTML = getCount("wondermuffin");
