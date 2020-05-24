const { ReversePolishNotation } = require('../src/reversePolishNotation');

test('check convert expression цшер addition to revers polish notation', async () => {
  const expression = '1+2';
  const result = ReversePolishNotation.conversionExpressionToRpn(expression);
  expect(result).toBe('1 2 + ');
});

test('check convert expression with subtraction to revers polish notation', async () => {
  const expression = '3-2';
  const result = ReversePolishNotation.conversionExpressionToRpn(expression);
  expect(result).toBe('3 2 - ');
});

test('check convert expression with multiplication to revers polish notation', async () => {
  const expression = '4*5';
  const result = ReversePolishNotation.conversionExpressionToRpn(expression);
  expect(result).toBe('4 5 * ');
});

test('check convert expression with division to revers polish notation', async () => {
  const expression = '6/3';
  const result = ReversePolishNotation.conversionExpressionToRpn(expression);
  expect(result).toBe('6 3 / ');
});

test('check convert expression with several operation to revers polish notation', async () => {
  const expression = '1+4-5*7';
  const result = ReversePolishNotation.conversionExpressionToRpn(expression);
  expect(result).toBe('1 4 5 7 * - + ');
});

test('check convert expression with brackets operation to revers polish notation', async () => {
  const expression = '(2+3)*4';
  const result = ReversePolishNotation.conversionExpressionToRpn(expression);
  expect(result).toBe('2 3 + 4 * ');
});
