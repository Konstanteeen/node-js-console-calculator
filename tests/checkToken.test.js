test("check symbol 'space' is delimeter", async () => {
    expect(isDelimeter(' ').toBe(true));
});

test("check symbol '3' is digit", async () => {
   expect(isDigit('3').toBe(true));
});

test("check symbol '+' is operator", async () => {
    expect(isOperator('+').toBe(true));
});

test("check priority for symbol", async () => {
   expect(getPriotity('-').toBe(3));
});
