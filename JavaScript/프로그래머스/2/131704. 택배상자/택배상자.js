function solution(order) {
    let answer = 0;
    const stack = [];
    let orderIdx = 0;
    let package = 0;
    
    while (orderIdx < order.length) {
        if (stack.length > 0 && stack[stack.length - 1] === order[orderIdx]) {
            stack.pop();
            answer++;
            orderIdx++;
            continue;
        }
        
        if (package >= order.length) break;
        
        if (order[orderIdx] === package + 1) {
            answer++;
            orderIdx++;
        } else {
            stack.push(package + 1);
        }
        package++;
    }
    
    return answer;
}
