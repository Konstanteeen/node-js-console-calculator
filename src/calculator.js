const readLine = require('readline-sync');
const { ReversePolishNotation } = require('./reversePolishNotation');
const { checkBrackets } = require('./controlBrackets');
const { conversionWithUnaryMinus } = require('./unaryMinus');

const expression = readLine.question('Enter expression ');
const expressionAfterConversionUnaryMinus = conversionWithUnaryMinus(expression);
const controlBrackets = checkBrackets(expressionAfterConversionUnaryMinus);
console.log(expressionAfterConversionUnaryMinus);
if (controlBrackets) {
  const expressionToRpn = ReversePolishNotation.conversionExpressionToRpn(expressionAfterConversionUnaryMinus);
  const resultCalculate = ReversePolishNotation.calculateRpn(expressionToRpn);
  if (Number.isNaN(resultCalculate)) {
    throw new Error('В веденном математическом выражении присутсвуют недопустимые символы');
  }
  console.log(`Результат вычисления: ${resultCalculate}`);
} else {
  console.log('Проверьте корректность скобок в веденном математическом выражении');
}
