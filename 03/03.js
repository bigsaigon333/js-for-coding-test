const result = require("fs")
  .readFileSync(0, "utf-8")
  .trim()
  .split("\n")
  .slice(1)
  .map((line) =>
    line
      .split(" ")
      .map(Number)
      .reduce((a, b) => Math.min(a, b))
  )
  .reduce((a, b) => Math.max(a, b));

console.log(result);
