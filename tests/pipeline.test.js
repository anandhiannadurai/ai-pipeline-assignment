const { buildPrompt } = require("../src/pipeline");

test("buildPrompt should return a string", () => {
  expect(typeof buildPrompt()).toBe("string");
});

test("prompt should not be empty", () => {
  expect(buildPrompt().length).toBeGreaterThan(0);
});