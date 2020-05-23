const isDelimeter = (symbol,) => {
    if ((" =".indexOf(symbol,) !== -1)) {
        return true;
    }
    return false;
};

module.exports = { isDelimeter, };
