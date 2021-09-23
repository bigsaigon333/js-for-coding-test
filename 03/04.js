let [N, K] = require("fs")
  .readFileSync(0, "utf-8")
  .trim()
  .split(" ")
  .map(Number);

let count = 0;

while (N >= K) {
  if (N % K === 0) {
    N = N / K;
    count = count + 1;
  } else {
    const remained = N % K;

    N = N - remained;
    count = count + remained;
  }
}

count = count + N - 1;

console.log(count);
