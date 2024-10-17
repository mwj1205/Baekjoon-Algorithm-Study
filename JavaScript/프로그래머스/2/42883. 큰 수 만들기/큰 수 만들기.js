function solution(number, k) {
    const stack = [];
    let countK = 0;
    
    for(const num of number) {
        while (countK < k && stack.length > 0 && stack[stack.length-1] < num ) {
            stack.pop();
            countK++;
        }
        stack.push(num);
    }
    
    while(countK < k) {
        stack.pop();
        countK++;
    }
    
    return stack.join('');
}