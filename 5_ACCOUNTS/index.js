// modulos externos
const inquirer = require('inquirer');
const chalk = require('chalk');

// modulos internos
const fs = require('fs');

console.log('Iniciamos o Accounts');

operation();

function operation() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: 'O que você deseja fazer?',
        choices: ['Criar Conta', 'Consultar Saldo', 'Depositar', 'Sacar', 'Sair'],
      },
    ])
    .then(answer => {
      const action = answer['action'];
      if (action === 'Criar Conta') {
        createAccount();
      } else if (action === 'Consultar Saldo') {
      } else if (action === 'Depositar') {
        deposit();
      } else if (action === 'Sacar') {
      } else if (action === 'Sair') {
        console.log(chalk.bgHex('#5261fc').black('Obrigado por usar o Accounts!'));
        process.exit(); // vai encerrar o sistema!
      }
    })
    .catch(err => console.error(err));
}

// create an Account
function createAccount() {
  console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco!'));
  console.log(chalk.green('Defina as opções da sua conta a seguir.'));
  buildAccount();
}

function buildAccount() {
  inquirer
    .prompt([
      {
        name: 'accountName',
        message: 'Digite um nome para a sua conta:',
      },
    ])
    .then(answer => {
      const accountName = answer['accountName'];
      console.info(accountName);

      if (!fs.existsSync('accounts')) {
        fs.mkdirSync('accounts');
      }

      if (fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed.black('Esta conta já existe, escolha outro nome!'));
        buildAccount();
        return;
      }

      fs.writeFileSync(`accounts/${accountName}.json`, '{"balance": 0}', err => {
        console.error(err);
      });

      console.log(chalk.green('Parabéns, a sua conta foi criada!'));
      operation();
    })
    .catch(err => console.error(err));
}

// add an amount to user account
function deposit() {
  inquirer
    .prompt([
      {
        name: 'accountName',
        message: 'Qual o nome da sua conta?',
      },
    ])
    .then(answer => {
      const accountName = answer['accountName'];

      if (!checkAccount(accountName)) {
        return deposit();
      }
    })
    .catch(err => console.log(err));
}

function checkAccount(accountName) {
  if (!fs.existsSync(`accounts/${accountName}.json`)) {
    console.log(chalk.bgRed.black('Esta conta não existe, escolha outro nome!'));
    return false;
  }
  return true;
}
