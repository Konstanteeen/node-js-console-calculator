const conversionWithUnaryMinus = (expression) => {
  expression = expression.replace('(-', '(0-');
  if (expression.charAt(0) === '-') {
    expression = '0' + expression;
  }
  return expression;
};

module.exports = { conversionWithUnaryMinus };
