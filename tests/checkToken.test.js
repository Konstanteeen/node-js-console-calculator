const { isOperator, } = require("../src/operator",);
const { getPriority, } = require("../src/priority",);
const { isDigit, } = require("../src/digit",);
const { isDelimeter, } = require("../src/delimeter",);

test("check symbol 'space' is delimeter", async () => {
    const result = isDelimeter("=",);
    expect(result,).toBe(true,);
},);

test("check symbol '3' is digit", async () => {
    const result = isDigit("3",);
    expect(result,).toBe(true,);
},);

test("check symbol '+' is operator", async () => {
    const result = isOperator("+",);
    expect(result,).toBe(true,);
},);

test("check priority for symbol", async () => {
    const result = getPriority("-",);
    expect(result,).toBe(3,);
},);
