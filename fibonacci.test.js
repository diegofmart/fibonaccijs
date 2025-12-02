const fibonacci = require("./fibonacci");

test("Fibonacci de 0 deve ser 0", () => {
  expect(fibonacci(0)).toBe(0);
});

test("Fibonacci de 1 deve ser 1", () => {
  expect(fibonacci(1)).toBe(1);
});

test("Fibonacci de 5 deve ser 5", () => {
  expect(fibonacci(5)).toBe(5);
});

test("Fibonacci de 7 deve ser 13", () => {
  expect(fibonacci(7)).toBe(13);
});

test("Fibonacci de 10 deve ser 55", () => {
  expect(fibonacci(10)).toBe(55);
});
