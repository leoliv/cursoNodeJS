const fs = require('fs');

if (!fs.existsSync('./minhapasta')) {
  console.log('Não existe!');
  fs.mkdirSync('minhapasta');
  console.log('Criando pasta!');
} else {
  console.log('existe!');
}
