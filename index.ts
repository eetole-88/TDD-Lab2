import Greeter from "./Greeter";
import HtmlGreeter from "./HtmlGreeter";
import JavaScriptGreeter from "./JavaScriptGreeter";
import LoudGreeter from "./LoudGreeter";
import promptConfig from "prompt-sync";

const greeter = new Greeter("Hello");
const javaScriptGreeter = new JavaScriptGreeter("Hello");
const loudGreeter = new LoudGreeter("Hello");
const htmlGreeter = new HtmlGreeter("Hello", "p");
const prompt = promptConfig({ sigint: true });
const chalk = require("chalk");
const log = console.log;

console.log(greeter.greet("Mitch"));
console.log(javaScriptGreeter.greet("Mitch"));
console.log(loudGreeter.greet("Mitch"));
console.log(htmlGreeter.greet("Mitch"));
console.log(chalk.yellow("Hello world!"));

log(chalk.blue("Hello") + "World" + chalk.red("!"));
log(chalk.blue.bgRed.bold("Hello World!"));
log(chalk.blue("Hello", "world!", "Foo", "bar", "biz", "baz"));
log(chalk.red("Hello", chalk.underline.bgBlue("world" + "!")));
log(
  chalk.green(
    "I am a green line" +
      chalk.blue.underline.bold("with a blue substring") +
      "that becomes  green again!"
  )
);

let input = prompt("Please enter something: ");

console.log(input);
