function solution(n, left, right) {
    var answer = [];
    let lrow = Math.floor(left / n) + 1;

    let lcol = left % n + 1;
    for(let i = left; i <= right; i++) {
        answer.push(Math.max(lrow, lcol));
        lcol++;
        if(lcol > n) {
            lcol = 1;
            lrow++;
        }
    }
    return answer;
}