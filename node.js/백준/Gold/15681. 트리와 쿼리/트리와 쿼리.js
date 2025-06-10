const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");
const [N, R, Q] = input[0].split(" ").map(Number);

// 인접 리스트
const tree = Array.from({ length: N + 1 }, () => []);
for (let i = 1; i < N; i++) {
  const [u, v] = input[i].split(" ").map(Number);
  tree[u].push(v);
  tree[v].push(u);
}

const subtreeSize = Array(N + 1).fill(0);
const visited = Array(N + 1).fill(false);

function dfs(node) {
  visited[node] = true;
  subtreeSize[node] = 1;

  for (const neighbor of tree[node]) {
    if (!visited[neighbor]) {
      subtreeSize[node] += dfs(neighbor);
    }
  }

  return subtreeSize[node];
}

dfs(R);

const result = [];
for (let i = N; i < N + Q; i++) {
  const query = Number(input[i]);
  result.push(subtreeSize[query]);
}

console.log(result.join("\n"));
