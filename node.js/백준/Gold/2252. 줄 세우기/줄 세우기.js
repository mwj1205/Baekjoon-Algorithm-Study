const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const graph = Array.from({ length: n + 1 }, () => []);
const indegree = Array(n + 1).fill(0);

for (let i = 1; i <= m; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    graph[a].push(b);
    indegree[b]++;
}

const queue = [];
for (let i = 1; i <= n; i++) {
    if (indegree[i] === 0) queue.push(i);
}

const result = [];

while (queue.length) {
    const node = queue.pop();
    result.push(node);

    for (const next of graph[node]) {
        indegree[next]--;
        if (indegree[next] === 0) queue.push(next);
    }
}

console.log(result.join(' '));
