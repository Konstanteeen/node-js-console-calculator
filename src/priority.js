const getPriority = (operator) => {
  switch (operator) {
    case '+': return 1;
    case '-': return 1;
    case '*': return 2;
    case '/': return 2;
  }
};

module.exports = { getPriority };
