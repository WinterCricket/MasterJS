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
const birthYear = 1968;
let year = 2008;

// const wray = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '.';

// console.log(wray);

const wrayTemplateStr = `I'm ${firstName}, a ${year - birthYear} years old ${job}.`;

document.getElementById('concatination').innerHTML = wrayTemplateStr;
