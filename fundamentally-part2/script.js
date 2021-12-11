'use strict';

const domID = document.querySelector('#domID');
const domClass = document.querySelector('#domClass');
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
// const calcAge = function(birthYear) {
// 	return 2021 - birthYear;
// };

// const yearsToRetire = (birthYear, nickName) => {
// 	const age = calcAge(birthYear);
// 	const retirement = 67 - age;

// 	if (retirement > 10) {
// 		return (domID.innerHTML = `You've got ${retirement} years of runway left to take off!✈🚀🪂`);
// 	} else if (retirement > 0 && retirement < 9) {
// 		return (domID.innerHTML = `${nickName}, you're running out of runway, love. Just ${retirement} more years and you'll end up in the trees without a soft landing.😲`);
// 	} else {
// 		return (domID.innerHTML = `Having missed the mark by ${retirement *
// 			-1} years, you, ${nickName}, have done run off the runway!⏰🗑🛌⛴`);
// 	}
// };

// yearsToRetire(1966, 'Frostworthy');

// const calcAverage = (score1, score2, score3) => {
// 	const av = (score1 + score2 + score3) / 3;
// 	return (domID.innerHTML = `Your averaged score of ${av} 🏁points will place against the other contestants. The highest score average wins.`);
// };

// calcAverage(3, 4, 8);

// const cars = [ 'Camry', 'Audi', 'Saab', 'Subaru' ];
// domID.innerHTML = cars[2];

// // const writers = new Array('Joyce', 'Boston Girl', 'Davis', 'Rumi');
// // domID.innerHTML = writers[2];

// cars[2] = 'Range Rover';
// domID.innerHTML = cars[2];

// const classy = [ 'Camry', 'Audi', 'Saab', 'Subaru' ];
// domClass.innerHTML = classy[1];

// const fatBastards = [ 'Cousin Joe', 'Avery Smith', 'Apple White', 'Janet Fowler' ];
// fatBastards.push('Fly McFly');
// fatBastards.unshift('Jane Allgood');
// domID.innerHTML = fatBastards;
// domClass.innerHTML = fatBastards.indexOf('Apple White') + ' ' + 'index';

// const flowers = [ 'Albert Flowers', 2022 - 1976, 'developer', [ 'Ellen', 'Maria', 'Sylvia' ] ];

// for (let i = flowers.length - 1; i >= 0; i--) {
// 	console.log(i, flowers[i]);
// }

const cashPrinciple = [ 100, 23, 500, 230, 800, 25 ];
let interest = 0;

let total = 0;

for (let i = 0; i < cashPrinciple.length; i++) {
	total += cashPrinciple[i];
	console.log(`----Cash----`);
	console.log(total);

	interest += cashPrinciple[i] * 0.07;
	console.log(`----Interest----`);

	console.log(interest);
	console.log(`----GrandTotal---`);
	console.log(total + interest);
}
