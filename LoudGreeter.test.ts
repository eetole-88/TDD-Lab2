import LoudGreeter from "../src/LoudGreeter";

describe("LoudGreeter class", () => {
  test("the greeting property is set", () => {
    let obj: LoudGreeter = new LoudGreeter("Hello");
    expect(obj.greeting).toBe("Hello");
  });
  test("the greet method includes the extra exclamation points that are represented by the extra property", () => {
    let obj: LoudGreeter = new LoudGreeter("Hello");
    expect(obj.greet("Mitch")).toBe("Hello, Mitch!!");
  });
  test("the addVolume adds one extra exclamation point to the extra property each time it is called", () => {
    let obj: LoudGreeter = new LoudGreeter("Hello");
    obj.addVolume();
    obj.addVolume();
    obj.addVolume();
  });
});
