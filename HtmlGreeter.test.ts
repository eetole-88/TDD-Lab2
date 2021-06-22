import HtmlGreeter from "../src/HtmlGreeter";

describe("HtmlGreeter class", () => {
  test("the greeting property is set based on a provided value", () => {
    const obj: HtmlGreeter = new HtmlGreeter("Hello");
    expect(obj.greeting).toBe("Hello");
  });
  test("the tagName property is set based on a provided value", () => {
    const obj: HtmlGreeter = new HtmlGreeter("Hello", "div");
    expect(obj.tagName).toBe("div");
  });
  test("the greet method uses the proper tag in its result", () => {
    const obj: HtmlGreeter = new HtmlGreeter("Hello", "div");
    expect(obj.greet("Mitch")).toBe("<div>Hello, Mitch!</div>");
  });
  test("the greet method uses the default tagName when none is provided", () => {
    const obj: HtmlGreeter = new HtmlGreeter("Hello");
    expect(obj.greet("Mitch")).toBe("<h1>Hello, Mitch!</h1>");
  });
});
