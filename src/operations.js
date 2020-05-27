const operationList = [
  {
    operator: '+',
    precedence: 1,
    fn: (a, b) => b + a
  },
  {
    operator: '-',
    precedence: 1,
    fn: (a, b) => b - a
  },
  {
    operator: '*',
    precedence: 2,
    fn: (a, b) => b * a
  },
  {
    operator: '/',
    precedence: 2,
    fn: (a, b) => b / a
  }
];

const hasOperator = (token) => operationList.some(({ operator }) => operator === token);

const getPrecedence = (token) => {
  const result = operationList.find(({ operator }) => operator === token);
  return result.precedence;
};

const calculateRpnExpression = (token, a, b) => {
  const result = operationList.find(({ operator }) => operator === token);
  return result.fn(a, b);
};

module.exports = {
  operationList, hasOperator, getPrecedence, calculateRpnExpression
};
