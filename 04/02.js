const N = Number(require("fs").readFileSync(0, "utf-8").trim());

let count = 0;
for (let hour = 0; hour <= N; hour += 1) {
  for (let min = 0; min < 60; min += 1) {
    for (let sec = 0; sec < 60; sec += 1) {
      if (`${hour}${min}${sec}`.includes("3")) {
        count += 1;
      }
    }
  }
}

console.log(count);
