const chalk = require('chalk');
const getNotes = require('./notes');

console.log(getNotes());

console.log(chalk.blue.bold.inverse('Success'));
// const add = require('./utils.js')
//const name = 'Prashant';
// let sum = add(3, 5);
// console.log(sum);