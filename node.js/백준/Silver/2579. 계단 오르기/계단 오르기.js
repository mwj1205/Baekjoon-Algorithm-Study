const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n').map(Number);

const n = input[0];
const score = [0, ...input.slice(1)];
const dp = Array(n + 1).fill(0);

dp[1] = score[1];
if (n >= 2) dp[2] = score[1] + score[2];

for (let i = 3; i <= n; i++) {
  dp[i] = Math.max(
    dp[i - 2] + score[i], // 2칸 점프
    dp[i - 3] + score[i - 1] + score[i] // 두 계단 연속
  );
}

console.log(dp[n]);