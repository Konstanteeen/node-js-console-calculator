const readLine = require("readline-sync",);
const {ReversePolishNotation} = require("./reversePolishNotation",);

const expression = readLine.question("Enter expression ", );
const expressionToRpn = ReversePolishNotation.conversionExpressionToRpn(expression,);
const resultCalculate = ReversePolishNotation.calculateRpn(expressionToRpn,);
console.log(`Результат вычисления: ${resultCalculate}`);