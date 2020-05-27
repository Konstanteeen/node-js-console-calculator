const { isDelimeter } = require('./delimeter');
const { isDigit } = require('./digit');
const Stack = require('./stack');
const { hasOperator, getPrecedence, calculateRpnExpression } = require('./operations');
const { isBracket } = require('./controlBrackets');

class ReversePolishNotation {
  static conversionExpressionToRpn(infix) {
    let operStack = new Stack();
    let token;
    let postfix = '';
    let operator1;
    let operator2;

    for (let i = 0; i < infix.length; i++) {
      token = infix[i];
      if (isDelimeter(infix[i])) continue;
      if (isDigit(infix[i])) {
        while (!isDelimeter(infix[i]) && !hasOperator(infix[i]) && !isBracket(infix[i])) {
          postfix += infix[i];
          i++;
          if (i === infix.length) break;
        }
        postfix += ' ';
        i--;
      } else if (hasOperator(token)) {
        operator1 = token;
        operator2 = operStack.peek();
        while (hasOperator(operator2) && (getPrecedence(operator1) <= getPrecedence(operator2))) {
          postfix += operator2 + ' ';
          operStack.pop();
          operator2 = operStack.peek();
        }
        operStack.push(operator1);
      } else if (token === '(') {
        operStack.push(token);
      } else if (token === ')') {
        while (operStack.peek() !== '(') {
          postfix += operStack.pop() + ' ';
        }
        operStack.pop();
      }
    }
    while (operStack.length() > 0) {
      postfix += operStack.pop() + ' ';
    }
    return postfix;
  }

  static calculateRpn(input) {
    let result = 0;
    let temp = [];

    for (let i = 0; i < input.length; i++) {
      if (isDigit(input[i])) {
        let s = '';
        while (!isDelimeter(input[i]) && !hasOperator(input[i])) {
          s += input[i];
          i++;
          if (i === input.length) break;
        }
        temp.push(parseFloat(s));
        i--;
      } else if (hasOperator(input[i])) {
        let a = temp.pop();
        let b = temp.pop();
        result = calculateRpnExpression(input[i], a, b);
        temp.push(result);
      }
    }
    return temp[0];
  }
}


module.exports = { ReversePolishNotation };
