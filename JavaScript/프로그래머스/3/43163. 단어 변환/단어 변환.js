function canTransform(word1, word2) {
    let diff = 0;
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) diff++;
        if (diff > 1) return false;
    }
    return diff === 1;
}

function solution(begin, target, words) {
    if (!words.includes(target)) return 0;
    
    const visited = new Set();
    const queue = [[begin, 0]];
    
    while (queue.length > 0) {
        const [current, count] = queue.shift();
        
        if (current === target) return count;
        
        for (const word of words) {
            if (!visited.has(word) && canTransform(current, word)) {
                visited.add(word);
                queue.push([word, count + 1]);
            }
        }
    }
    
    return 0;
}