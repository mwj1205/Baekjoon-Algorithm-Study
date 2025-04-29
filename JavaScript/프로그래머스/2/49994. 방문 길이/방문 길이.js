function solution(dirs) {
    const move = {'U': [0, 1], 'D': [0, -1], 'L': [-1, 0], 'R': [1, 0]};
    
    const visited = new Set();
    let answer = 0;
    let x = 0;
    let y = 0;
    
    for (let dir of dirs) {
        const [dx, dy] = move[dir];
        const nx = x + dx;
        const ny = y + dy;
        
        // 좌표평면의 경계를 넘어가면 무시
        if (nx > 5 || nx < -5 || ny > 5 || ny < -5) continue;
        
        // 경로 표현 (양 방향 모두 표현)
        const path1 = `${x},${y}-${nx},${ny}`;
        const path2 = `${nx},${ny}-${x},${y}`;
        
        // 처음 걸어보는 길인지 확인
        if (!visited.has(path1) && !visited.has(path2)) {
            visited.add(path1);
            visited.add(path2); // 양방향 모두 추가 (방향에 상관없이 같은 길로 처리)
            answer++;
        }
        
        // 현재 위치 이동
        x = nx;
        y = ny;
    }
    return answer;
}