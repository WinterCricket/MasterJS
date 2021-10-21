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
let year = 2021;

// const wray = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '.';

// console.log(wray);

const wrayTemplateStr = `<h2>I'm ${firstName},</h2>
 <h2>a ${year - birthYear} years</h2>
 <h2>old ${job}.</h2>`;

document.getElementById('concatination').innerHTML = wrayTemplateStr;
console.log(wrayTemplateStr);
