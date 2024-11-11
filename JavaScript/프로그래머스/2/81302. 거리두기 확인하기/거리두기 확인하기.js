function solution(places) {
    const answer = [];
    
    places.forEach((room) => {
        answer.push(checkSafe(room));
    });
    
     function checkSafe(room) {
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if (room[i][j] === 'P') {
                    if(!isSafe(room, i, j)) {
                        return 0;
                    }
                }
            }
        }
        return 1;
    }
    
    function isSafe(room, row, col) {
        const directions = [
            [1, 0], [0, 1], [-1, 0], [0, -1],
            [1, 1], [-1, 1], [1, -1], [-1, -1],
            [2, 0], [0, 2], [-2, 0], [0, -2],
        ]

        for (const [dx, dy] of directions) {
            const tx = row + dx;
            const ty = col + dy;
            
            if (tx < 0 || tx >= 5 || ty < 0 || ty >= 5) continue;
            
            if (Math.abs(dx) + Math.abs(dy) === 1 && room[tx][ty] === 'P') {
                return false;
            }
            
            if (Math.abs(dx) + Math.abs(dy) === 2 && room[tx][ty] === 'P') {
                if (Math.abs(dx) === 1 && Math.abs(dy) === 1) {
                    if (!(room[row][ty] === 'X' && room[tx][col])) return false;
                }
                if (dx === 2 && room[row + 1][col] !== 'X') return false;
                if (dx === -2 && room[row - 1][col] !== 'X') return false;
                if (dy === 2 && room[row][col + 1] !== 'X') return false;
                if (dy === -2 && room[row][col - 1] !== 'X') return false;
            }
        }
        return true;
    }
    
    return answer;
}