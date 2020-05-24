const { ReversePolishNotation, } = require("../src/reversePolishNotation",);

test("add operation check", async () => {
    const expression = "4+5";
    const resultConvertToRpn = ReversePolishNotation.conversionExpressionToRpn(expression,);
    const resultCalculation = ReversePolishNotation.calculateRpn(resultConvertToRpn,);
    expect(resultCalculation,).toBe(9,);
},);

test("subtraction operation check", async () => {
    const expression = "11-5";
    const resultConvertToRpn = ReversePolishNotation.conversionExpressionToRpn(expression,);
    const resultCalculation = ReversePolishNotation.calculateRpn(resultConvertToRpn,);
    expect(resultCalculation,).toBe(6,);
},);

test("multiplication operation check", async () => {
    const expression = "11*2";
    const resultConvertToRpn = ReversePolishNotation.conversionExpressionToRpn(expression,);
    const resultCalculation = ReversePolishNotation.calculateRpn(resultConvertToRpn,);
    expect(resultCalculation,).toBe(22,);
},);

test("division operation check", async () => {
    const expression = "12/4";
    const resultConvertToRpn = ReversePolishNotation.conversionExpressionToRpn(expression,);
    const resultCalculation = ReversePolishNotation.calculateRpn(resultConvertToRpn,);
    expect(resultCalculation,).toBe(3,);
},);

test("check priority operation in expression", async () => {
    const expression = "2+2*5";
    const resultConvertToRpn = ReversePolishNotation.conversionExpressionToRpn(expression,);
    const resultCalculation = ReversePolishNotation.calculateRpn(resultConvertToRpn,);
    expect(resultCalculation,).toBe(12,);
},);

test("getting a rational number", async () => {
    const expression = "12/5";
    const resultConvertToRpn = ReversePolishNotation.conversionExpressionToRpn(expression,);
    const resultCalculation = ReversePolishNotation.calculateRpn(resultConvertToRpn,);
    expect(resultCalculation,).toBe(2.4,);
},);

test("check operation with a rational number", async () => {
    const expression = "2.5+1.1";
    const resultConvertToRpn = ReversePolishNotation.conversionExpressionToRpn(expression,);
    const resultCalculation = ReversePolishNotation.calculateRpn(resultConvertToRpn,);
    expect(resultCalculation,).toBe(3.6,);
},);

test("check operation with a brackets", async () => {
    const expression = "(1+5)/2+2";
    const resultConvertToRpn = ReversePolishNotation.conversionExpressionToRpn(expression,);
    const resultCalculation = ReversePolishNotation.calculateRpn(resultConvertToRpn,);
    expect(resultCalculation,).toBe(5,);
},);

test("get negative number", async () => {
    const expression = "10-20";
    const resultConvertToRpn = ReversePolishNotation.conversionExpressionToRpn(expression,);
    const resultCalculation = ReversePolishNotation.calculateRpn(resultConvertToRpn,);
    expect(resultCalculation,).toBe(-10,);
},);
