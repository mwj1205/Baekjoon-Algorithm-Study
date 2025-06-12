const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const N = +input[0];
const paper = input.slice(1).map(line => line.split(" ").map(Number));

let count = {
  "-1": 0,
  "0": 0,
  "1": 0
};

function isSame(x, y, size) {
  const base = paper[x][y];
  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      if (paper[i][j] !== base) return false;
    }
  }
  return true;
}

function divide(x, y, size) {
  if (isSame(x, y, size)) {
    count[paper[x][y]]++;
    return;
  }

  const newSize = size / 3;
  for (let dx = 0; dx < 3; dx++) {
    for (let dy = 0; dy < 3; dy++) {
      divide(x + dx * newSize, y + dy * newSize, newSize);
    }
  }
}

divide(0, 0, N);

console.log(count["-1"]);
console.log(count["0"]);
console.log(count["1"]);
