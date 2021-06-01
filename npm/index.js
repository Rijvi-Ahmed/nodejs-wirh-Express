const chalk = require('chalk');
console.log(chalk.green.underline.inverse('Hello world!'));

const validator = require("validator");
const res = validator.isEmail("rijvi@gmail.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
  