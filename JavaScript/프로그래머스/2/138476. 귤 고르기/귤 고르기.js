function solution(k, tangerine) {
    const tangerineMap = new Map();
    for(const tanger of tangerine) {
        if (tangerineMap.has(tanger)) {
            tangerineMap.set(tanger, tangerineMap.get(tanger) + 1);
        }
        else {
            tangerineMap.set(tanger, 1);
        }
    }
    
    const tangerineArr = [...tangerineMap].sort((a, b) => b[1] - a[1]);
    
    let i = 0;
    while (k > 0) {
        k -= tangerineArr[i][1];
        i++;
    }
    
    return i;
}