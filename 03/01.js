let N = 1260;
let count = 0;

// 큰 단위의 화폐부터 차례대로 확인
for (const coin of [500, 100, 50, 10]) {
  count += Math.floor(N / coin); // 해당 화폐로 거슬러 줄 수 있는 동전의 개수 세기
  N %= coin;
}

console.log(count);
