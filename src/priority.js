const getPriority = (operator) => {
  switch (operator) {
    case '(': return 0;
    case ')': return 1;
    case '+': return 2;
    case '-': return 2;
    case '*': return 3;
    case '/': return 3;
    default: return 4;
  }
};

module.exports = { getPriority };
