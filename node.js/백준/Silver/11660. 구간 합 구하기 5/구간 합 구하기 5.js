const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
// 1-based 배열로 제작
const board = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));
for (let i = 1; i <= N; i++) {
  const line = input[i].split(' ').map(Number);
  for (let j = 1; j <= N; j++) {
    board[i][j] = line[j - 1];
  }
}
const queries = input.slice(1 + N).map(line => line.split(' ').map(Number));

// 누적합 배열
const prefix = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

// prefix[i][j] = (1,1)부터 (i,j)까지의 합
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    prefix[i][j] = board[i][j]           // 현재 위치 값
                 + prefix[i - 1][j]      // 바로 위까지 누적합
                 + prefix[i][j - 1]      // 바로 왼쪽까지 누적합
                 - prefix[i - 1][j - 1]; // 겹쳐 더한 왼쪽 위 블록 제거
  }
}

const output = [];

for (const [x1, y1, x2, y2] of queries) {
  const sum = prefix[x2][y2] // 전체 사각형 합
            - prefix[x1 - 1][y2] // 위쪽 영역 제거
            - prefix[x2][y1 - 1] // 왼쪽 영역 제거
            + prefix[x1 - 1][y1 - 1]; // 두번 뺀 겹치는 영역 더하기
  output.push(sum);
}

console.log(output.join('\n'));
