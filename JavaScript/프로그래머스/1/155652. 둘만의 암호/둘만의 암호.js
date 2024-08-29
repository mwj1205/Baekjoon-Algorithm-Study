function solution(s, skip, index) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    var answer = '';
    for(let c of s) {
        if(c === ' ') {
            answer += c;
            continue;
        }
        let nowindex = alpha.indexOf(c);
        let step = 0;
        while(step < index) {
            nowindex = (nowindex + 1) % 26;
            if(!skip.includes(alpha[nowindex]))
                step++;
        }
        answer += alpha[nowindex];
    }
    
    return answer;
}