const coords = { L: [0, -1], R: [0, 1], U: [-1, 0], D: [1, 0] };
const isInRange = (x, X) => 0 <= x && x < X;

const input = require("fs").readFileSync(0, "utf-8").trim().split("\n");
const N = Number(input[0]);
const dirs = input[1].split(" ").map((ch) => coords[ch]);

let [cx, cy] = [0, 0];
for (const [dx, dy] of dirs) {
  const [nx, ny] = [cx + dx, cy + dy];

  if (!isInRange(nx, N) || !isInRange(ny, N)) continue;

  [cx, cy] = [nx, ny];
}

console.log(`${cx + 1} ${cy + 1}`);
