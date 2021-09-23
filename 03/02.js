const input = require("fs").readFileSync(0, "utf-8").trim().split("\n");
// N, M, K를 공백으로 구분하여 입력받기
const [, M, K] = input[0].split(" ").map(Number);
// N개의 수를 공백으로 구분하여 입력받아 정렬 후 가장 큰 수와 두번째로 큰 수 추출
const [first, second] = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

const secondCount = Math.floor(M / (K + 1), 0); // 두번째로 큰 수가 더해지는 횟수 계산
const firstCount = M - secondCount; // 첫번째로 큰 수가 더해지는 횟수 계산

const result = first * firstCount + second * secondCount;

console.log(result); // 최종 답안 출력
