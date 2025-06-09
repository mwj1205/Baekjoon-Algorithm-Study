const fs = require('fs');
const input = fs.readFileSync(0, "utf-8").trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const edges = input.slice(1).map(line => line.split(' ').map(Number));

const INF = Infinity;
const dist = Array(n + 1).fill(INF);
dist[1] = 0;  // 1번 도시에서 시작

// 벨만 포드 알고리즘
for (let i = 1; i < n; i++) {
    for (const [from, to, cost] of edges) {
        if (dist[from] !== INF && dist[to] > dist[from] + cost) {
            dist[to] = dist[from] + cost;
        }
    }
}

// 음수 사이클 검사
for (const [from, to, cost] of edges) {
    if (dist[from] !== INF && dist[to] > dist[from] + cost) {
        console.log(-1);
        process.exit();
    }
}

for (let i = 2; i <= n; i++) {
    console.log(dist[i] === INF ? -1 : dist[i]);
}
