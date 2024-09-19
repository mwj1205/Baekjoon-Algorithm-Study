function solution(n, left, right) {
    var answer = [];
    let lrow = Math.floor(left / n) + 1;

    let lcol = left % n + 1;
    while(right >= left) {
        if(lcol > lrow) answer.push(lcol);
        else answer.push(lrow);

        lcol++;
        right--;
        if(lcol > n) {
            lcol = 1;
            lrow++;
        }
    }
    return answer;
}