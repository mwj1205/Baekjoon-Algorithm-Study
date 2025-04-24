function solution(maps) {
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    const queue = [];
    queue.push([0, 0, 1]); // [y, x, 거리]
    
    while (queue.length > 0) {
        const [y, x, dist] = queue.shift();
        
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            // 벽 또는 맵 밖이면 무시
            if (nx < 0 || ny < 0 || nx >= maps[0].length || ny >= maps.length)
                continue;
            // 이미 방문한 곳이면 무시
            if (maps[ny][nx] === 0)
                continue;
            
            // 목적지에 도착한 경우
            if (ny === maps.length - 1 && nx === maps[0].length - 1) {
                return dist + 1;
            }
            
            // 이동 가능한 경우
            maps[ny][nx] = 0;
            queue.push([ny, nx, dist + 1]);
            
        }
    }
    
    return -1;
}