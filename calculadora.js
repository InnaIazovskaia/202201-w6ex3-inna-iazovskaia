const debug = require("debug")("calculator");
const chalk = require("chalk");

const calculate = (a, b) => {
  debug(`${chalk.green(+a)} + ${chalk.yellow(+b)} = ${chalk.blue(+a + +b)}`);
  debug(`${chalk.green(a)} - ${chalk.yellow(b)} = ${chalk.blue(a - b)}`);
  debug(`${chalk.green(a)} * ${chalk.yellow(b)} = ${chalk.blue(a * b)}`);
  debug(`${chalk.green(a)} / ${chalk.yellow(b)} = ${chalk.blue(a / b)}`);
};

module.exports = { calculate };
