function solution(s) {
    const arr = s
    .slice(2, -2)
    .split("},{")
    .map(str => str.split(',').map(Number))
    .sort((a, b) => a.length - b.length);
    
    const result = [];
    const exists = new Set();
    for (const el of arr) {
        for (const num of el) {
            if (!exists.has(num)) {
                result.push(num);
                exists.add(num);
            }
        }
    }
    
    return result;
}