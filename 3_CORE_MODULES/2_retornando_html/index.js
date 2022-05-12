'use strict';

const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200; // sucesso
  res.setHeader('Contenty-Type', 'text/html');
  res.end(
    '<h1>Olá, este é meu primeiro server com HTML!</h1><p>Testando atualização</p>',
  );
});
// const server = http.createServer((req, res) => {
//   res.write(
//     '<h1>Olá, este é meu segundo server com HTML!</h1><p>Testando atualização</p>',
//   );
//   res.end();
// });

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
