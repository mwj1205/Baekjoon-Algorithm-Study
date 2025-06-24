const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const N = +input[0];
const M = +input[1];
const graph = input.slice(2, 2 + N).map(line => line.split(' ').map(Number));
const travel = input[2 + N].split(' ').map(x => +x - 1); // 0-based index

// 유니온 파인드
const parent = Array(N).fill(0).map((_, i) => i);

function find(x) {
  if (parent[x] !== x) parent[x] = find(parent[x]);
  return parent[x];
}

function union(a, b) {
  const pa = find(a);
  const pb = find(b);
  if (pa !== pb) parent[pb] = pa;
}

// 연결된 도시들끼리 union
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (graph[i][j] === 1) {
      union(i, j);
    }
  }
}

// 여행 경로의 도시들이 모두 같은 루트인지 확인
const root = find(travel[0]);
for (let i = 1; i < M; i++) {
  if (find(travel[i]) !== root) {
    console.log('NO');
    return;
  }
}

console.log('YES');
