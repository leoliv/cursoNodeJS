'use strict';
const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer
  .prompt([
    {
      name: 'question01',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'question02',
      message: 'How old are you?',
      validate: answer => {
        if (isNaN(answer)) return 'Please enter a number';
        return true;
      },
    },
  ])
  .then(answers => {
    console.log(
      chalk.bgYellow.black.bold(
        `My name is ${answers.question01} and I'm ${answers.question02} years old.`,
      ),
    );
  })
  .catch(err => {
    console.error(err);
  });
