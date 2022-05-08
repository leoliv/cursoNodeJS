'use strict';

const x = '10';

// check if x is a number
if (!Number.isInteger(x)) {
  // The 'throw' will finish the program
  throw new Error('The value of x is not an integer');
}

console.log('Continuing the code...');
