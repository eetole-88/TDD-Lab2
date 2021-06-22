import chalk from "chalk";

class ChalkGreeter {
  greeting: string;
  color: string;
  constructor(greeting: string, color: string) {
    this.greeting = greeting;
    this.color = color;
  }
  greet(name: string): void {
    console.log(`${chalk[this.color]}`);
  }
}
