function makePairMap(str) {
    const map = new Map();
    const lower = str.toLowerCase();
    for (let i = 0; i < lower.length - 1; i++) {
        const pair = lower[i] + lower[i + 1];
        if(/^[a-z]{2}$/.test(pair)) {
            map.set(pair, (map.get(pair) || 0) + 1);
        }
    }
    return map;
}

function solution(str1, str2) {
    const map1 = makePairMap(str1);
    const map2 = makePairMap(str2);
    
    let intersection = 0;
    let union = 0;
    const keys = new Set([...map1.keys(), ...map2.keys()]);
    
    for (const key of keys) {
        const count1 = map1.get(key) || 0;
        const count2 = map2.get(key) || 0;
        union += Math.max(count1, count2);
        intersection += Math.min(count1, count2);
    }

    if (union === 0) return 65536;
    else return Math.floor((intersection / union) * 65536);
}