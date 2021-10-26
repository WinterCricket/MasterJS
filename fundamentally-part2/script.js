'use strict';

let domID = document.getElementById('domID');

let driversLisc = false;
const passTest = true;

if (passTest) driversLisc = true;
if (driversLisc) domID.innerHTML = `You can drive!`;
