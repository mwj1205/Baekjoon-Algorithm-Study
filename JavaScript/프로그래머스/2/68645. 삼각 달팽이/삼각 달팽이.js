function solution(n) {
    const triangle = [];
    for (let i = 1; i <= n; i++) {
        triangle.push(Array(i).fill(0));
    }
    
    let num = 0;
    let x = -1, y = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (i % 3 === 0) {
                x++;
            } else if (i % 3 === 1) {
                y++;
            } else {
                x--;
                y--;
            }
            triangle[x][y] = ++num;
        }
    }
    
    const answer = [];
    for (let i = 0; i < n; i++) {
        answer.push(...triangle[i])
    }
    
    return answer;
}