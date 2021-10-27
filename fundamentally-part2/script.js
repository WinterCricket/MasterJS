'use strict';

const domID = document.getElementById('domID');

function twoPies(first, second) {
	const pies = `Make two pies: ${first} pie and ${second} pie.`;
	return pies;
}

const mummyPies = twoPies('licorice', 'ginger');

const kidPies = twoPies('M&M', 'Ice Cream');

const adultPies = twoPies('whisky-peach', 'sherry-shrimp');

domID.innerHTML = kidPies;
