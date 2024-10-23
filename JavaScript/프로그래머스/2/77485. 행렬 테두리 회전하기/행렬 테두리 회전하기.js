function solution(rows, columns, queries) {
    const answer = [];
    const matrix = [];
    let num = 0;
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < columns; j++) {
            row.push(++num);
        }
        matrix.push(row);
    }

    for (const query of queries) {
        const lx = query[0] - 1;
        const ly = query[1] - 1;
        const rx = query[2] - 1;
        const ry = query[3] - 1;
        
        let start = matrix[lx][ly];
        let min = start;
        for (let i = lx; i < rx; i++) {
            matrix[i][ly] = matrix[i+1][ly];
            min = Math.min(min, matrix[i][ly]);
        }
        
        for (let i = ly; i < ry; i++) {
            matrix[rx][i] = matrix[rx][i+1];
            min = Math.min(min, matrix[rx][i]);
        }

        for (let i = rx; i > lx; i--) {
            matrix[i][ry] = matrix[i-1][ry];
            min = Math.min(min, matrix[i][ry]);
        }
        
        for (let i = ry; i > ly; i--) {
            matrix[lx][i] = matrix[lx][i-1];
            min = Math.min(min, matrix[lx][i]);
        }
        
        matrix[lx][ly+1] = start;
        answer.push(min);
    }
    return answer;
}