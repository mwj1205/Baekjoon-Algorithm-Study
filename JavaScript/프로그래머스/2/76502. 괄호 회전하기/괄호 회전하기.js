function isvalidBracket(bracket) {
    let stack = [];
    for (br of bracket) {
        if (br === '(' || br === '{' || br === '[') stack.push(br);
        else {
            switch (br) {
                case ')':
                    if (stack.pop() !== '(') return false;
                    break;
                case '}':
                    if (stack.pop() !== '{') return false;
                    break;
                case ']':
                    if (stack.pop() !== '[') return false;
                    break;
            }
        }
    }
    return stack.length === 0;
}

function solution(s) {
    var answer = 0;
    for(let i = 0; i < s.length; i++) {
        s = s.slice(1) + s[0];
        if(isvalidBracket(s)) answer++;
    }
    return answer;
}