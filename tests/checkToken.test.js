const { isOperator } = require('../src/operator');
const { getPriority } = require('../src/priority');
const { isDigit } = require('../src/digit');
const { isDelimeter } = require('../src/delimeter');
const { checkBrackets } = require('../src/controlBrackets');

test("check symbol 'space' is delimeter", async () => {
  const result = isDelimeter('=');
  expect(result).toBe(true);
});

test("check symbol '3' is digit", async () => {
  const result = isDigit('3');
  expect(result).toBe(true);
});

test("check symbol '+' is operator", async () => {
  const result = isOperator('+');
  expect(result).toBe(true);
});

test('check priority for symbol', async () => {
  const result = getPriority('-');
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
