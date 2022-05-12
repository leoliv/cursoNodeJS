'use strict';

const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.write('<h1>Oi HTTP</h1>');
  res.end();
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
