const isOperator = (operator) => {
  if (('+-/*()'.indexOf(operator) !== -1)) {
    return true;
  }
  return false;
};

module.exports = { isOperator };
