'use strict';

const http = require('http');
const server = http.createServer((req, res) => {
  res.write('Olá');
  res.end();
});

server.listen('3000', () => {
  console.log('Rodando na porta 3000');
});
