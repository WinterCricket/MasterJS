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

const domID = document.getElementById('drinking');
// const money = 8200;

// if (money) {
// 	dom.innerHTML = `Okay, but try to spend less than your $${money}. Certainly don't use credit, and don't make promises you can't keep.`;
// } else {
// 	dom.innerHTML = `Don't spend, you have  $${money}. You will get into trouble here in Texas.`;
// }
// const age = Number(prompt("What's your age?"));

// if (age >= 18) {
// 	domID.innerHTML = `You are ${age}, which is a fine enough age for using the brothel. Welcome! You have ${75 -
// 		age} years left for enjoying sex.`;
// } else if (age >= 75) {
// 	domID.innerHTML = `You are past retirement age by ${age - 65} years, and no longer eligible for physical affection.`;
// } else {
// 	domID.innerHTML = `Ah, ${age}, far too young for using our services. Wait ${18 - age} years, then come back!`;
// }

const hasMFA = true;
const hasPublished = true;

domID.innerHTML = hasMFA && hasPublished;
