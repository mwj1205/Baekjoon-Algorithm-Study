function solution(priorities, location) {
    const queue = priorities.map((priority, index) => ({
        priority,
        index,
    }));
    
    let countExec = 0;
    
    while(queue.length > 0) {
        let currentProcess = queue.shift();
        if (queue.some(p => p.priority > currentProcess.priority)) {
            queue.push(currentProcess);
        } 
        else {
            countExec++;
            if (currentProcess.index === location) return countExec;
        }
    }
}