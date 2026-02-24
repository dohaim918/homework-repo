const isValidPassword = require("./password");

describe("isValidPassword", () => {
  describe("성공 케이스", () => {
    test("모든 조건을 만족하면 'true'를 반환", () => {
      expect(isValidPassword("password123*")).toBe(true);
    });
  });

  describe("실패 케이스", () => {
    test("빈 문자열이면 'false'를 반환", () => {
      expect(isValidPassword(" ")).toBe(false);
    });

    test("8자 미만이면 'false'를 반환", () => {
      expect(isValidPassword("tast1")).toBe(false);
    });

    test("영문이 없으면 'false'를 반환", () => {
      expect(isValidPassword("12345678")).toBe(false);
    });

    test("숫자가 없으면 'false'를 반환", () => {
      expect(isValidPassword("password")).toBe(false);
    });

    test("특수문자가 없으면 'false'를 반환", () => {
      expect(isValidPassword("password123")).toBe(false);
    });
  });
});
