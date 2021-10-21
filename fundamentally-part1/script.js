// const isIsland = false;

// const population = 64000000;

// const country = 'Canada';

// const language = 'French';

// console.log(typeof isIsland, typeof population);
// // console.log(typeof );
// console.log(typeof country);
// console.log(typeof language);

const firstName = 'Wray';
const job = 'web developer';
const birthYear = 2011;
let year = 2021;

let age = year - birthYear;

const canDrink = age >= 21;

if (canDrink) {
	document.getElementById('drinking').innerHTML = `${firstName} is ${age}, and therefore can drink😎 `;
} else {
	document.getElementById(
		'drinking'
	).innerHTML = `${firstName} is ${age}, which is really too young for getting pissed🤦‍♀️ `;
}
