'use strict';

const domID = document.getElementById('domID');

function twoPies(first, second) {
	domID.innerHTML = `Make two pies: ${first} pie and ${second} pie.`;
}

twoPies('ice cream', 'pineapple');
