'use strict';

const domID = document.getElementById('domID');

// function twoPies(first, second) {
// 	const pies = `Make two pies: ${first} pie and ${second} pie.`;
// 	return pies;
// }

// const mummyPies = twoPies('licorice', 'ginger');

// const kidPies = twoPies('M&M', 'Ice Cream');

// const adultPies = twoPies('whisky-peach', 'sherry-shrimp');

// domID.innerHTML = kidPies;

//function declaration

// function calcAgeism1(birthYear) {
// 	return 2037 - birthYear;
// }
// const ageism1 = calcAgeism1(1966);
// domID.innerHTML = `You will be ${ageism1} when the tech brings immortality.`;
// console.log(ageism1);

//function expression using anonymous function
const calcAgeism2 = function(birthYear) {
	return 2037 - birthYear;
};
domID.innerHTML = `You will be made immortal in this function expression in your ${calcAgeism2(1966)}st year.`;
console.log(calcAgeism2(1966));

//arrow function
const calcAge3 = (birthYear) => 2035 - birthYear;
const age3 = calcAge3(1966);
domID.innerHTML = `They roused everone who was ${age3} years alive.`;
