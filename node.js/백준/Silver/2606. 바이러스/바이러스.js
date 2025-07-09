const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const n = Number(input[0]);
const m = Number(input[1]);

const graph = Array.from({ length: n + 1 }, () => []);
const visited = Array(n + 1).fill(false);

// 그래프 구성
for (let i = 2; i < 2 + m; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a); // 양방향 연결
}

// BFS
function bfs(start) {
    const queue = [start];
    visited[start] = true;
    let count = 0;

    while (queue.length > 0) {
        const node = queue.shift();

        for (const next of graph[node]) {
            if (!visited[next]) {
                visited[next] = true;
                queue.push(next);
                count++;
            }
        }
    }

    return count;
}

console.log(bfs(1));
