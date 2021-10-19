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
	return mass / height ** 2;
}

let markBMI = functionBMI(massMark, heightMark);
let johnBMI = functionBMI(massJohn, heightJohn);

let markIsAFatass = markBMI > johnBMI;
console.log(markIsAFatass);
