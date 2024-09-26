function isPrime(num) {
    if(num < 2) return false;
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false;
    }
    return true;
}

function solution(n, k) {
    let answer = 0;
    
    const nums = n.toString(k).split('0');
    for(const num of nums) {
        if(num && isPrime(Number(num))) {
            answer++;
        }
    }
    
    
    return answer;
}