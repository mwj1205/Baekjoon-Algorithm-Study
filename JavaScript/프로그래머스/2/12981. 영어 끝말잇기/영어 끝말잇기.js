function solution(n, words) {
    const usedWords = new Set();
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const prevWord = words[i - 1];
        
        // 이미 사용한 단어거나, 끝말잇기 규칙을 어긴 경우
        if (usedWords.has(word) || (i > 0 && prevWord[prevWord.length - 1] !== word[0])) {
            const player = (i % n) + 1;
            const turn = Math.floor(i / n) + 1;
            return [player, turn];
        }
        usedWords.add(word);
    }
    return [0, 0];
}