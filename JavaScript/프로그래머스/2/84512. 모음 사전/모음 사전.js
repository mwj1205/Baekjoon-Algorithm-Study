function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U']
    let answer = 0;
    let count = -1;
    
    function dfs (s, len) {
        if(len > 5) return;
        
        count++;
        if(s === word) {
            answer = count;
        }
        for (const vowel of vowels) {
            dfs(s + vowel, len + 1)
        }
    }
    
    dfs('', 0);
    
    return answer;
}