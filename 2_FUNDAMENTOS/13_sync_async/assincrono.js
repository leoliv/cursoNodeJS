const fs = require('fs');

console.log('Início');

fs.writeFile('arquivo.txt', 'Oi de Novo', function (err) {
  setTimeout(function () {
    console.log('Arquivo criado!');
  }, 2000);
});

console.log('Fim');
