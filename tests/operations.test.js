const { hasOperator, getPrecedence, calculateRpnExpression } = require('../src/operations');

test('check operationList has operator', async () => {
  const result = hasOperator('+');
  expect(result).toBe(true);
});

test('check operationList has not operator', async () => {
  const result = hasOperator('**');
  expect(result).toBe(false);
});

test('check get precedence by token', async () => {
  const result = getPrecedence('-');
  expect(result).toBe(1);
});

test('check calculate rpn expression', async () => {
  const a = 6;
  const b = 3;
  const result = calculateRpnExpression('/', b, a);
  expect(result).toBe(2);
});
