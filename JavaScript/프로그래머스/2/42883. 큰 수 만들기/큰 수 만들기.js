function solution(number, k) {
    const stack = [];
    let numidx = 0;
    let countK = 0;
    for(const num of number) {
        while (countK < k && stack.length > 0 && stack[stack.length-1] < num ) {
            stack.pop();
            countK++;
        }
        stack.push(num);
    }
    
    for(let i = countK; i < k; i++) {
        stack.pop();
    }
    
    return stack.join('');
}