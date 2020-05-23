const getPriority = (operator,) => {
    switch (operator) {
    case "(": return 0;
    case ")": return 1;
    case "+": return 2;
    case "-": return 3;
    case "*": return 4;
    case "/": return 6;
    default: return 7;
    }
};

module.exports = { getPriority, };
