import Greeter from "../src/Greeter";

describe("Greeter class", () => {
  test("the constructor sets the greeting property with the provided value", () => {
    let obj: Greeter = new Greeter("Hello");
    expect(obj.greeting).toBe("Hello");
  });
  test("the greet method returns a string with the proper greeting and provided name", () => {
    let obj: Greeter = new Greeter("Hello");
    expect(obj.greet("Wes")).toBe("Hello, Wes!");
  });
});
