const readLine = require('readline-sync');
const { ReversePolishNotation } = require('./reversePolishNotation');
const { checkBrackets } = require('./controlBrackets');

const expression = readLine.question('Enter expression ');
const controlBrackets = checkBrackets(expression);
if (controlBrackets) {
  const expressionToRpn = ReversePolishNotation.conversionExpressionToRpn(expression);
  const resultCalculate = ReversePolishNotation.calculateRpn(expressionToRpn);
  if (Number.isNaN(resultCalculate)) {
    throw new Error('В веденном математическом выражении присутсвуют недопустимые символы');
  }
  console.log(`Результат вычисления: ${resultCalculate}`);
} else {
  console.log('Проверьте корректность скобок в веденном математическом выражении');
}
