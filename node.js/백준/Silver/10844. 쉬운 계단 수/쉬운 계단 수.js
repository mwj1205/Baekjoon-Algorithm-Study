const fs = require('fs');
const N = +fs.readFileSync(0, 'utf-8').trim();
const MOD = 1_000_000_000;

// dp[n][d]: 길이가 n, 마지막 숫자가 d인 계단 수 개수
const dp = Array.from({ length: N + 1 }, () => Array(10).fill(0));

// 초기값
for (let i = 1; i <= 9; i++) {
    dp[1][i] = 1;
}

for (let n = 2; n <= N; n++) {
    for (let d = 0; d <= 9; d++) {
        if (d > 0) dp[n][d] += dp[n - 1][d - 1];
        if (d < 9) dp[n][d] += dp[n - 1][d + 1];
        dp[n][d] %= MOD;
    }
}

const result = dp[N].reduce((sum, val) => (sum + val) % MOD, 0);
console.log(result);
