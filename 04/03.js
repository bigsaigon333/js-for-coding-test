const isInRange = (n, N) => 0 <= n && n < N;

const input = require("fs").readFileSync(0, "utf-8").trim().split("");
const X = Number(input[1]) - 1;
const Y = input[0].charCodeAt(0) - "a".charCodeAt(0);

const count = [
  [1, 2],
  [-1, 2],
  [1, -2],
  [-1, -2],
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
]
  .map(([dx, dy]) => [X + dx, Y + dy])
  .filter(([nx, ny]) => isInRange(nx, 8) && isInRange(ny, 8)).length;

console.log(count);
