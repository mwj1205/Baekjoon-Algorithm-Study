function solution(info, n, m) {
    let dp = new Map();
    dp.set(0, 0);
    for (const[a, b] of info) {
        const newDp = new Map();
        for (const [bSum, aSum] of dp.entries()) {
            const newASum = a + aSum
            if (newASum < n) {
                const prevA = newDp.get(bSum);
                if (prevA === undefined || prevA > newASum) {
                    newDp.set(bSum, newASum);
                }
            }
            
            const newBSum = b + bSum
            if (newBSum < m) {
                const prevA = newDp.get(newBSum);
                if (prevA === undefined || prevA > aSum) {
                    newDp.set(newBSum, aSum);
                }
            }
        }
        dp = newDp;
    }
    
    let answer = Infinity;
    for (const a of dp.values()) {
        if (a < answer) answer = a;
    }
    
    return answer === Infinity ? -1 : answer;
}