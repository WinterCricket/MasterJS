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

// const hasMFA = true;
// const hasPublished = true;
// const friendsWithPower = false;
// domID.innerHTML = (hasMFA && hasPublished) || friendsWithPower;

// const avgDogs = (97 + 112 + 101) / 3;
// const avgCats = (109 + 95 + 106) / 3;
// //minimum avg score of 100?
// if (avgDogs === avgCats && avgDogs >= 100) {
// 	domID.innerHTML = `A tie of ${avgDogs} each, so each team takes home a 2nd place medal: 🥈🥈.`;
// } else if (avgDogs === avgCats && avgDogs < 100) {
// 	domID.innerHTML = `A tie with the avg score being a mere ${avgDogs} so each team takes home nothing but sore feelings.😪🤐`;
// } else if (avgDogs > avgCats && avgDogs >= 100) {
// 	domID.innerHTML = `The Dogs take home the trophy🏆 with a ${avgDogs -
// 		avgCats} points lead, and an average score of ${abgDogs}.`;
// } else if (avgCats >= 100) {
// 	domID.innerHTML = `The Cats take home the 🏆 with a ${avgCats -
// 		avgDogs} points lead, and an average score of ${avgCats}.`;
// } else {
// 	domID.innerHTML = `With the average score between the two teams being ${(avgDogs + avgCats) /
// 		2}, no one takes a trophy, no how!🤷‍♂️🤦‍♂️`;
// }

// const age = 31;

// const drink =
// 	age > 21 ? `I am ${age} and must instead drink rain. 🌨` : `I'm ${age}, still young enough to drink lightning. 🌩`;

// domID.innerHTML = drink;
const bill = 40;
const totalBill = bill >= 50 && bill <= 300 ? bill * 1.15 : bill * 1.2;

domID.innerHTML = `Your total bill comes to $${totalBill}, with $${bill} for the bill and $${totalBill -
	bill} for the added tip.`;
