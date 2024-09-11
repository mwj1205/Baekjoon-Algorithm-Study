function solution(s) {
    let count = 0, removedZero = 0;
    
    while(s !== '1') {
        const prevLength = s.length;
        
        s = s.split('').filter(c => c === '1').join('');
        const nowLength = s.length;
        removedZero += prevLength - nowLength;
        s = nowLength.toString(2);
        count++;
    }
    
    return [count, removedZero];
}