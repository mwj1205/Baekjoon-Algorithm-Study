function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    const queue =  [];
    let bridgeWeight = 0;
    let waitIdx = 0;
    
    while (waitIdx < truck_weights.length || queue.length > 0) {
        time++;

        if (queue.length > 0 && time - queue[0][1] >= bridge_length) {
            const out = queue.shift()
            bridgeWeight -= out[0];
        }
        
        if (waitIdx < truck_weights.length &&
            bridgeWeight + truck_weights[waitIdx] <= weight) {
            queue.push([truck_weights[waitIdx], time]);
            bridgeWeight += truck_weights[waitIdx];
            waitIdx++;
        }
        
    }
    return time;
}