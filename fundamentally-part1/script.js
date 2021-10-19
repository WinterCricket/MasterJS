// const isIsland = false;

// const population = 64000000;

// const country = 'Canada';

// const language = 'French';

// console.log(typeof isIsland, typeof population);
// // console.log(typeof );
// console.log(typeof country);
// console.log(typeof language);

const massMark = 71;
const heightMark = 1.8;

const massJohn = 78;
const heightJohn = 1.7;

function functionBMI(mass, height) {
	return (BMI = mass / height ** 2);
}

function markHigherBMI() {
	let markBMI = functionBMI(massMark, heightMark);
	let johnBMI = functionBMI(massJohn, heightJohn);

	if (markBMI > johnBMI) {
		return true;
	} else {
		return false;
	}
}

console.log(markHigherBMI());
