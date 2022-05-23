import _ from 'lodash';
import chalk from 'chalk';
import colors from 'colors';
// const colors = require('colors');
// const _ = require('lodash');

const a = [1, 2, 3, 4, 5];
const b = [2, 4, 6, 7, 8];
// const arrays = [
//   [1, 2, 3, 4, 5],
//   [2, 4, 6, 7, 8],
// ];
// const backBlue = chalk.bgYellow.red.bold.underline;
const diff = _.difference(a, b);
console.log(chalk.bgHex('#f44').italic(diff));
