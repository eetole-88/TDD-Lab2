import JavaScriptGreeter from "../src/JavaScriptGreeter";

describe("JavaScriptGreeter class", () => {
  test("the greeting property is set", () => {
    const obj: JavaScriptGreeter = new JavaScriptGreeter("Hello");
    expect(obj.greeting).toBe("Hello");
  });
  test("the greet method overrides the parent greet method and returns the proper string", () => {
    const obj: JavaScriptGreeter = new JavaScriptGreeter("Hello");
    expect(obj.greet("Mitch")).toBe("console.log('Hello, Mitch!')");
  });
});
