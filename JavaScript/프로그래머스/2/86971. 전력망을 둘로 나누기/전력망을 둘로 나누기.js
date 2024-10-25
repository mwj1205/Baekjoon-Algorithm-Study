function solution(n, wires) {
    const graph = Array.from({length: n + 1}, () => []);
    
    wires.forEach(([v1, v2]) => {
        graph[v1].push(v2);
        graph[v2].push(v1);
    })
    
    const bfs = (node, visited) => {
        let count = 1;
        visited[node] = true;
        
        for (let next of graph[node]) {
            if (!visited[next]) {
                count += bfs(next, visited);
            }
        }
        return count;
    }
    let min = Infinity;
    // 모든 wire를 끊어보면서
    for (const [v1, v2] of wires) {
        graph[v1] = graph[v1].filter((tt) => tt !== v2);
        graph[v2] = graph[v2].filter((tt) => tt !== v1);
        const visited = Array(n+1).fill(false);
        const countNode = bfs(v1, visited);
        const count2 = n - countNode;
        
        const diff = Math.abs(countNode - count2);
        min = Math.min(min, diff);
        graph[v1].push(v2);
        graph[v2].push(v1);
    }
    return min;
}