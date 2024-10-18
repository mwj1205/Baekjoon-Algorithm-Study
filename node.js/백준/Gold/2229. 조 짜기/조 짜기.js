function solution(scores) {
  const n = scores.length;
  const dp = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    let max = scores[i];
    let min = scores[i];
    for (let j = i; j >= 0; j--) {
      max = Math.max(max, scores[j]);
      min = Math.min(min, scores[j]);
      const jteamScore = max - min;
      const otherteamScore = j > 0 ? dp[j - 1] : 0;

      dp[i] = Math.max(dp[i], jteamScore + otherteamScore);
    }
  }
  return dp[n - 1];
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const scores = input[1].split(' ').map(Number);
console.log(solution(scores));
