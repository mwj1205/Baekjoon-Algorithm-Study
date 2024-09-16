function solution(elements) {
    const sums = new Set();
    
    for(let k = 1; k <= elements.length; k++) {
        for(let i = 0; i < elements.length; i++) {
            let sum = 0;
            for(let j = 0; j < k; j++) {
                sum += elements[(j + i) % elements.length];
            }
            sums.add(sum);
            if(k === elements.length) break;
        }
    }
    return sums.size;
}