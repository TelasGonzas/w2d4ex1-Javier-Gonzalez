import yipikayey from "./index.js";

describe("Given checkVowels function", () => {
  describe("When it receives the word 'murcielago'", () => {
    test("Then it should returns false", () => {
      const word = "murcielago";

      const expectedValue = yipikayey.checkVowels(word);
      const expectedResult = true;

      expect(expectedValue).toBe(expectedResult);
    });
  });
  describe("When it receives the word 'cacafuti'", () => {
    test("Then it should return false", () => {
      const word = "cacafuti";

      const expectedValue = yipikayey.checkVowels(word);
      const expectedResult = false;

      expect(expectedValue).toBe(expectedResult);
    });
  });
});

describe("Given the checkEvens function", () => {
  describe("When it receives the number '32'", () => {
    test("Then it should return true", () => {
      const number = 32;

      const expectedValue = yipikayey.checkEvens(number);
      const expectedResult = true;

      expect(expectedValue).toBe(expectedResult);
    });
  });
  describe("When it receives the number '23'", () => {
    test("Then it should return false", () => {
      const number = 23;

      const expectedValue = yipikayey.checkEvens(number);
      const expectedResult = false;

      expect(expectedValue).toBe(expectedResult);
    });
  });
});

describe("Given a checkPrime function", () => {
  describe("When it receives number 11", () => {
    test("Then it should return true", () => {
      const number = 11;

      const expectedValue = yipikayey.checkPrime(number);
      const expectedResult = true;

      expect(expectedValue).toBe(expectedResult);
    });
  });
});
