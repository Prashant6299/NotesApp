const validator = require('validator');
const getNotes = require('./notes');

console.log(getNotes());
console.log(validator.isEmail('prashantsingh06@outlook.com'));
console.log(validator.isEmail('prashantsingh06outlook.com'));

console.log(validator.isURL('google.com'));

// const add = require('./utils.js')
//const name = 'Prashant';
// let sum = add(3, 5);
// console.log(sum);