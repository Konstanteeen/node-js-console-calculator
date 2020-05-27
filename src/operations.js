const operationsList = [
  {
    operator: '+',
    precedence: 1,
    func: (a, b) => b + a
  },
  {
    operator: '-',
    precedence: 1,
    func: (a, b) => b - a
  },
  {
    operator: '*',
    precedence: 2,
    func: (a, b) => b * a
  },
  {
    operator: '/',
    precedence: 2,
    func: (a, b) => b / a
  }
];

const hasOperator = (symbol) => operationsList.some(({ operator }) => operator === symbol);

const getPrecedence = (symbol) => {
  const operationByOperator = operationsList.find(({ operator }) => operator === symbol);
  return operationByOperator.precedence;
};

const calculateRpnExpression = (symbol, a, b) => {
  const result = operationsList.find(({ operator }) => operator === symbol);
  return result.func(a, b);
};

module.exports = {
  operationsList, hasOperator, getPrecedence, calculateRpnExpression
};
