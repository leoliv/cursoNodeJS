'use strict';

const x = 10;
// x = 2;
// console.log(x);

try {
  x = 2;
} catch (err) {
  console.error(`Erro: ${err}`);
}

console.log('Continuing the code...');
