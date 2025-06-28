const fs = require("fs");
const input = fs.readFileSync(0, 'utf8').toString().trim().split("\n");

const [M, N] = input[0].split(" ").map(Number);
const map = input.slice(1).map(line => line.split(" ").map(Number));
// dp[x][y]: map[x][y]에서 map[M-1][N-1]로 가는 경로의 수
const dp = Array.from({ length: M }, () => Array(N).fill(-1));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function dfs(x, y) {
    // 도착 지점에 도달하면 경로 1개
    if (x === M - 1 && y === N - 1) return 1;

    // 이미 계산된 경우 저장된 값 그대로 사용
    if (dp[x][y] !== -1) return dp[x][y];

    dp[x][y] = 0;

    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx >= 0 && nx < M && ny >= 0 && ny < N) {
            if (map[nx][ny] < map[x][y]) {
                dp[x][y] += dfs(nx, ny);
            }
        }
    }
    return dp[x][y];
}

console.log(dfs(0, 0));