function solution(k, dungeons) {
    let answer = 0;
    const visited = new Array(dungeons.length).fill(false);
    
    function DFS(energy, count) {
        for(let i = 0; i < dungeons.length; i++) {
            if(!visited[i] && dungeons[i][0] <= energy) {
                visited[i] = true;
                DFS(energy - dungeons[i][1], count + 1);
                visited[i] = false;
            }
        }
        answer = Math.max(answer, count);
    }
    
    DFS(k, 0);
    
    return answer;
}