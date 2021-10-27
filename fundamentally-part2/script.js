'use strict';

const domID = document.getElementById('domID');

function twoPies(first, second) {
	domID.innerHTML = `Make two pies: ${first} pie and ${second} pie.`;
}

//const kidPies = twoPies('ice cream', 'pineapple');
const adultPies = twoPies('shrimp', 'whiskey-peach');
