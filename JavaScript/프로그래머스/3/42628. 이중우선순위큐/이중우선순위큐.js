function solution(operations) {
    const queue = [];
    for (const op of operations) {
        const [command, valueStr] = op.split(" ");
        const value = Number(valueStr);
        
        if (command === "I") {
            queue.push(value);
        } else if (command === "D" && queue.length > 0) {
            if (value === 1) { // 최댓값 삭제
                const max = Math.max(...queue);
                const index = queue.indexOf(max);
                queue.splice(index, 1);
            } else if (value === -1) { // 최솟값 삭제
                const min = Math.min(...queue);
                const index = queue.indexOf(min);
                queue.splice(index, 1);
            }
        }
    }
    if (queue.length === 0) return [0, 0];
    return [Math.max(...queue), Math.min(...queue)];
}