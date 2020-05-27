const { hasOperator } = require('../src/operations');
const { getPrecedence } = require('../src/operations');
const { isDigit } = require('../src/digit');
const { isDelimeter } = require('../src/delimeter');
const { checkBrackets, isBracket } = require('../src/controlBrackets');
const { conversionWithUnaryMinus } = require('../src/unaryMinus');

test("check symbol 'space' is delimeter", async () => {
  const result = isDelimeter('=');
  expect(result).toBe(true);
});

test("check symbol '3' is digit", async () => {
  const result = isDigit('3');
  expect(result).toBe(true);
});

test("check symbol '+' is operator", async () => {
  const result = hasOperator('+');
  expect(result).toBe(true);
});

test('check priority for symbol', async () => {
  const result = getPrecedence('-');
  expect(result).toBe(1);
});

test('check expression by correct brackets', async () => {
  const result = checkBrackets('(1+2)');
  expect(result).toBe(true);
});

test('error checking by open bracket', async () => {
  const result = checkBrackets('((1+2)');
  expect(result).toBe(false);
});

test('error checking by close bracket', async () => {
  const result = checkBrackets('(1+2))');
  expect(result).toBe(false);
});

test("check symbol '(' is bracket", async () => {
  const result = isBracket('(');
  expect(result).toBe(true);
});

test('check convert expression with unary minus', async () => {
  const expression = '-1+3';
  const result = conversionWithUnaryMinus(expression);
  expect(result).toBe('0-1+3');
});
