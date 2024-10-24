function solution(N, road, K) {
    const graph = Array.from({length: N+1}, () => []);
    
    for (const [a, b, c] of road) {
        graph[a].push([b, c]);
        graph[b].push([a, c]);
    }
    
    const distance = Array(N + 1).fill(Infinity);
    distance[1] = 0;
    
    const pq = [];
    pq.push([1, 0]); // [마을, 시간]
    
    while (pq.length > 0) {
        const [currentVillage, currentTime] = pq.shift();
        
        for (const [nextVillage, nextTime] of graph[currentVillage]) {
            const time = nextTime + currentTime;
            if (time < distance[nextVillage]) {
                distance[nextVillage] = time;
                pq.push([nextVillage, time]);
            }
        }
    }

    return distance.filter((dist) => dist <= K).length;
}