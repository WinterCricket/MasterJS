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

function calcAgeism1(birthYear) {
	return 2037 - birthYear;
}
const ageism1 = calcAgeism1(1966);
domID.innerHTML = `You will be ${ageism1} when the tech brings immortality.`;
console.log(ageism1);
