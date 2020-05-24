const { isDelimeter } = require('./delimeter');
const { isOperator } = require('./operator');
const { getPriority } = require('./priority');
const { isDigit } = require('./digit');

class ReversePolishNotation {
  static conversionExpressionToRpn(input) {
    let output = '';
    let operStack = [];

    for (let i = 0; i < input.length; i++) {
      if (isDelimeter(input[i])) continue;
      if (isDigit(input[i])) {
        while (!isDelimeter(input[i]) && !isOperator(input[i])) {
          output += input[i];
          i++;
          if (i === input.length) break;
        }
        output += ' ';
        i--;
      }
      if (isOperator(input[i])) {
        if (input[i] === '(') operStack.push(input[i]);
        else if (input[i] === ')') {
          let s = operStack.pop();
          while (s !== '(') {
            output += s.toString() + ' ';
            s = operStack.pop();
          }
        } else {
          if (operStack.length > 0) {
            if (getPriority(input[i]) <= getPriority(operStack[0])) {
              output += operStack.pop().toString() + ' ';
            }
          }
          operStack.push((input[i].toString()));
        }
      }
    }
    while (operStack.length > 0) {
      output += operStack.pop() + ' ';
    }
    return output;
  }

  static calculateRpn(input) {
    let result = 0;
    let temp = [];

    for (let i = 0; i < input.length; i++) {
      if (isDigit(input[i])) {
        let s = '';
        while (!isDelimeter(input[i]) && !isOperator(input[i])) {
          s += input[i];
          i++;
          if (i === input.length) break;
        }
        temp.push(parseFloat(s));
        i--;
      } else if (isOperator(input[i])) {
        let a = temp.pop();
        let b = temp.pop();

        switch (input[i]) {
          case '+': result = b + a; break;
          case '-': result = b - a; break;
          case '*': result = b * a; break;
          case '/': result = b / a; break;
        }
        temp.push(result);
      }
    }
    return temp[0];
  }
}

module.exports = { ReversePolishNotation };
