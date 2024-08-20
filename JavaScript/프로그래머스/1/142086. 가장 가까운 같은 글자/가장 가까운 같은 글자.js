function solution(s) {
    var answer = [];
    let alpha = new Map();
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if(!alpha.has(c)) {
            answer.push(-1);
        }
        else {
            answer.push(i - alpha.get(c));
        }
        alpha.set(c, i);
    }
    return answer;
}