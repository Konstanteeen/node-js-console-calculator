const isDigit = (symbol,) => {
    if (("0123456789".indexOf(symbol,) !== -1)) {
        return true;
    }
    return false;
};

module.exports = { isDigit, };
