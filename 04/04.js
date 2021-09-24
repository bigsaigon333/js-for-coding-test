const isInRange = (n, N) => 0 <= n && n < N;
const isLand = (x, y, board) => board[x][y] === 0;
const dirs = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const input = require("fs").readFileSync(0, "utf-8").trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
let [cx, cy, cd] = input[1].split(" ").map(Number);
const board = input.slice(2).map((line) => line.split(" ").map(Number));

const visited = Array.from({ length: N }, () => Array(M).fill(false));
visited[cx][cy] = true;

let count = 0;
// eslint-disable-next-line no-constant-condition
while (true) {
  cd = (cd - 1 + 4) % 4;
  const [dx, dy] = dirs[cd];
  const [nx, ny] = [cx + dx, cy + dy];

  if (count === 4) {
    [cx, cy] = [cx - dx, cy - dy];
    count = 0;

    if (!isInRange(cx, N) || !isInRange(cy, M) || !isLand(cx, cy, board)) {
      break;
    }
  } else {
    count += 1;
    if (
      !isInRange(nx, N) ||
      !isInRange(ny, M) ||
      !isLand(nx, ny, board) ||
      visited[nx][ny]
    ) {
      continue;
    }

    visited[nx][ny] = true;
    [cx, cy] = [nx, ny];
    count = 0;
  }
}

const result = visited.flat().filter(Boolean).length;

console.log(result);
