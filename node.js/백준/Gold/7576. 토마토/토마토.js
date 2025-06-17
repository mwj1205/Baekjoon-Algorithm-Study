const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const [M, N] = input[0].split(" ").map(Number);
const grid = input.slice(1).map(line => line.split(" ").map(Number));

const queue = [];
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

// 익은 토마토 위치 큐에 추가
for (let y = 0; y < N; y++) {
  for (let x = 0; x < M; x++) {
    if (grid[y][x] === 1) {
      queue.push([y, x]);
    }
  }
}

let head = 0;

while (head < queue.length) {
  const [y, x] = queue[head++];
  for (let i = 0; i < 4; i++) {
    const ny = y + dy[i];
    const nx = x + dx[i];
    if (
      ny >= 0 && ny < N &&
      nx >= 0 && nx < M &&
      grid[ny][nx] === 0
    ) {
      grid[ny][nx] = grid[y][x] + 1;
      queue.push([ny, nx]);
    }
  }
}

let result = 0;
for (let y = 0; y < N; y++) {
  for (let x = 0; x < M; x++) {
    if (grid[y][x] === 0) {
      console.log(-1);
      return;
    }
    result = Math.max(result, grid[y][x]);
  }
}

console.log(result - 1);