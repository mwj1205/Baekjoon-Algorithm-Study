function solution(keymaps, targets) {
    var answer = [];
    const alpha = new Map();
    for(keymap of keymaps) {
        for(let i = 0; i < keymap.length; i++) {
            const c = keymap[i];
            if(!alpha.has(c)) alpha.set(c, i);
            else {
                if(alpha.get(c) > i) alpha.set(c, i);
            }
        }
    }
    for(target of targets) {
        let result = 0;
        for(c of target) {
            if(!alpha.has(c)) {
                result = -1;
                break;
            }
            else result += alpha.get(c) + 1;
        }
        answer.push(result);
    }
        
    return answer;
}