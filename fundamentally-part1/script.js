// const isIsland = false;

// const population = 64000000;

// const country = 'Canada';

// const language = 'French';

// console.log(typeof isIsland, typeof population);
// // console.log(typeof );
// console.log(typeof country);
// console.log(typeof language);

// const firstName = 'Wray';
// const job = 'web developer';
// const birthYear = 2000;
// let year = 2021;

// let age = year - birthYear;

// const canDrink = age >= 21;

// if (canDrink) {
// 	document.getElementById('drinking').innerHTML = `${firstName} is ${age}: Hey, Al, pour ${firstName} a drink!😎 `;
// } else {
// 	document.getElementById(
// 		'drinking'
// 	).innerHTML = `${firstName} is ${age}, which is really too young for getting pissed🤦‍♀️ `;
// }

const dom = document.getElementById('drinking');
const money = 0;

if (money) {
	dom.innerHTML = `Okay, but try to spend less than your ${money}. Certainly don't use credit, and don't make promises you can't keep.`;
} else {
	dom.innerHTML = `Don't spend, you have  ${money}. You will get into trouble here in Texas.`;
}
