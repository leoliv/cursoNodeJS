'use strict';
const fs = require('fs');
fs.rename('arquivo.txt', 'renomeado.txt', err => {
  if (err) throw err;
  console.log('Arquivo renomeado!');
});
