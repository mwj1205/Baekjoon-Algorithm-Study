

function solution(maps) {
    const row = maps.length;
    const col = maps[0].length;
    const isVisited = [];
    for (let i = 0; i < row; i++) {
        isVisited.push(new Array(col).fill(false));
    }
    const direction = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const answer = [];
    
    const bfs = (x, y) => {
        const queue = [[x, y]];
        isVisited[x][y] = true;
        let sum = parseInt(maps[x][y]);
        while (queue.length > 0) {
            const [nowX, nowY] = queue.shift();
            for (const [dirX, dirY] of direction) {
                const newX = nowX + dirX;
                const newY = nowY + dirY;
                if (newX >= 0 && newX < row && newY >= 0 && newY < col && 
                    !isVisited[newX][newY] && maps[newX][newY] !== 'X') {
                    isVisited[newX][newY] = true;
                    sum += parseInt(maps[newX][newY]);
                    queue.push([newX, newY]);
                }
            }
        }
        return sum;
    }
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (maps[i][j] !== 'X' && !isVisited[i][j]) {
                const sum = bfs(i, j);
                answer.push(sum);
            }
        }
    }
    
    return answer.length > 0 ? answer.sort((a, b) => a - b) : [-1];
}