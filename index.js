require("dotenv").config();
const debug = require("debug")("index");
const prompt = require("prompt");
const { program } = require("commander");
const { calculate } = require("./calculadora");

prompt.start();
program.option("-a --number1 <number>");
program.option("-b --number2 <number>");
program.parse();

const { number1, number2 } = program.opts();

const askNumbers = async () => {
  debug("Enter two numbers");
  prompt.start();
  const numbers = await prompt.get(["firstNumber", "secondNumber"]);
  calculate(numbers.firstNumber, numbers.secondNumber);
};

if (!number1 && !number2) {
  askNumbers();
} else if (!number1 || !number2) {
  debug(
    "Enter two numbers: first number -a 'number, second number -b 'number''"
  );
  process.exit();
} else {
  calculate(number1, number2);
}
