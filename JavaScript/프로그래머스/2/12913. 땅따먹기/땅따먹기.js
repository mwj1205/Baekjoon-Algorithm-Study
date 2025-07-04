function solution(land) {
    const N = land.length;
    for (let i = 1; i < N; i++) {
        for (let j = 0; j < 4; j++) {
            land[i][j] += Math.max(...land[i - 1].filter((_, idx) => idx !== j))
        }
    }
    
    return Math.max(...land[N - 1])
}