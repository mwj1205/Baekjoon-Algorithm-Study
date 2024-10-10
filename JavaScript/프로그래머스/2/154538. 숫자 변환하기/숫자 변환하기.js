function solution(x, y, n) {
    if (x === y) return 0;
    const visited = new Array(y + 1).fill(false);
    const queue = [[y, 0]];
    
    while(queue.length > 0) {
        const [num, count] = queue.shift();
        
        if (num === x) return count;
        
        if(num >= x) {
            if (num % 3 === 0 && !visited[num / 3]) {
                queue.push([num / 3, count + 1]);
                visited[num / 3] = true;
            }
            if (num % 2 === 0 && !visited[num / 2]) {
                queue.push([num / 2, count + 1]);
                visited[num / 2] = true;
            }
            if(!visited[num - n]) {
                queue.push([num - n, count + 1]);
                visited[num - n] = true;
            }
        }
    }
    return -1;
}