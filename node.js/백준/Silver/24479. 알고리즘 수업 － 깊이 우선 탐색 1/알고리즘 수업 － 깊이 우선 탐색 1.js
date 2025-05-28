const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M, R] = input[0].split(' ').map(Number);
const edges = input.slice(1).map(line => line.split(' ').map(Number));

// 인접 리스트
const graph = Array.from({ length: N + 1 }, () => []);
for (const [u, v] of edges) {
  graph[u].push(v);
  graph[v].push(u);
}

for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

// 방문 순서 저장
const visitOrder = Array(N + 1).fill(0);
let order = 1;

// DFS
function dfs(node) {
  visitOrder[node] = order++;

  for (const next of graph[node]) {
    if (visitOrder[next] === 0) {
      dfs(next);
    }
  }
}

dfs(R);

console.log(visitOrder.slice(1).join('\n'));
