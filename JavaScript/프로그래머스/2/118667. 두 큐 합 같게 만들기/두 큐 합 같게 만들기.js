function solution(queue1, queue2) {
    const queue = [...queue1, ...queue2];
    let sum = 0;
    queue.forEach((num) => {
        sum += num;
    });
    
    if (sum % 2 !== 0) return -1;
    
    const target = sum / 2;
    let sum1 = 0;
    queue1.forEach((num) => {
        sum1 += num;
    });
    
    let left = 0;
    let right = queue1.length;
    let count = 0;
    
    while (left < queue.length && right < queue.length) {
        if (sum1 === target) return count;
        else if (sum1 > target) {
            sum1 -= queue[left];
            left++;
        } else {
            sum1 += queue[right];
            right++;
        }
        count++;
    }
    
    return -1;
}