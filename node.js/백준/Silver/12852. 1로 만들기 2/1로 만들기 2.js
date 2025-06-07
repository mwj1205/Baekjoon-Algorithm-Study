const fs = require('fs');
const input = +fs.readFileSync(0, "utf-8").toString().trim();

const N = input;
const dp = Array(N + 1).fill(0);
const parent = Array(N + 1).fill(0);      // parent[i]: i에 도달하기 전의 수 (경로 추적용)

// 1부터 N까지 각 수에 대해 최소 연산 횟수 계산
for (let i = 2; i <= N; i++) {
    // 기본적으로 1을 빼는 연산
    dp[i] = dp[i - 1] + 1;
    parent[i] = i - 1;

    // 2로 나누어 떨어지는 경우
    if (i % 2 === 0) {
        if (dp[Math.floor(i / 2)] + 1 < dp[i]) {
            dp[i] = dp[Math.floor(i / 2)] + 1;
            parent[i] = Math.floor(i / 2);
        }
    }
        
    // 3으로 나누어 떨어지는 경우
    if (i % 3 === 0) {
        if (dp[Math.floor(i / 3)] + 1 < dp[i]) {
            dp[i] = dp[Math.floor(i / 3)] + 1;
            parent[i] = Math.floor(i / 3);
        }
    }
}

    // 경로 추적
const path = [];
let current = N;
while (current !== 0) {
    path.push(current);
    current = parent[current];
}

console.log(dp[N]);
console.log(path.join(' '));