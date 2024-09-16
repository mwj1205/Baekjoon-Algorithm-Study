function solution(elements) {
    const sums = new Set();
    
    for(let i = 0; i < elements.length; i++) {
        let sum = 0;
        for(let j = 0; j < elements.length; j++) {
            sum += elements[(j + i) % elements.length];
            sums.add(sum);
        }

    }
    return sums.size;
}