const checkBrackets = (expression) => {
  const stack = [];
  for (const symbol of expression) {
    if (symbol === '(') stack.push(symbol);
    else if (symbol === ')') {
      if (!stack.pop()) return false;
    }
  }
  return stack.length === 0;
};

const isBracket = (symbol) => {
  if (('()'.indexOf(symbol) !== -1)) {
    return true;
  }
  return false;
};

module.exports = { checkBrackets, isBracket };
