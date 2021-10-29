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
// const calcAgeism2 = function(birthYear) {
// 	return 2037 - birthYear;
// };
// domID.innerHTML = `You will be made immortal in this function expression in your ${calcAgeism2(1966)}st year.`;
// console.log(calcAgeism2(1966));

//arrow function
// function calcAge3(birthYear) {
// 	return 2035 - birthYear;
// }

// const age3 = calcAge3(1966);
// domID.innerHTML = `They roused everone who was ${age3} years alive.`;
const calcAge = function(birthYear) {
	return 2055 - birthYear;
};

const yearsToRetire = (birthYear, nickName) => {
	const age = calcAge(birthYear);
	const retirement = 67 - age;

	if (retirement > 0 && retirement < 60) {
		return (domID.innerHTML = `You've got ${retirement} years of runway left to take off!`);
	} else if (retirement >= 60 && retirement < 67) {
		return (domID.innerHTML = `${nickName}, you're running out of runway, love. Just ${retirement} more years and you'll end up in the trees without a soft landing.`);
	} else {
		return (domID.innerHTML = `Having missed the mark by ${retirement *
			-1} years, you, ${nickName}, have done run off the runway!`);
	}
};

yearsToRetire(1966, 'Frostworthy');
