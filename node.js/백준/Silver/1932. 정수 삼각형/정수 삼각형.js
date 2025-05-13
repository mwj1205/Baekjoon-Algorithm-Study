const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const triangle = input.slice(1).map(line => line.split(' ').map(Number));

// 아래에서 위로 DP 누적
for (let i = n - 2; i >= 0; i--) {
  for (let j = 0; j <= i; j++) {
    triangle[i][j] += Math.max(triangle[i + 1][j], triangle[i + 1][j + 1]);
  }
}

console.log(triangle[0][0]);