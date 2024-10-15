function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function solution(numbers) {
    let count = 0;
    const isVisited = Array(numbers.length).fill(false);
    const combinations = new Set();
    
    function dfs(num) {
        for (let i = 0; i < numbers.length; i++) {
            if (num.length > 0) {
                combinations.add(Number(num));
            }
            
            if (!isVisited[i]) {
                isVisited[i] = true;
                dfs(num + numbers[i]);
                isVisited[i] = false;
            }
        }
    }
    
    dfs('');
    
    let answer = 0;
    combinations.forEach(num => {
        if (isPrime(num)) answer++;
    })
    
    return answer;
}