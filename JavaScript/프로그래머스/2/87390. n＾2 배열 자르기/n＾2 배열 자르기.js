function solution(n, left, right) {
    var answer = [];
    let lrow = Math.floor(left / n) + 1;
    let lcol = left % n + 1;
    
    for(let i = left; i <= right; i++) {
        answer.push(Math.max(Math.floor(i / n) + 1, i % n + 1));
    }
    return answer;
}