function solution(a, b, n) {
    var answer = 0;
    let temp = 0;
    while (n >= a) {
        temp = Math.floor(n/a) * b;
        n = (n % a) + temp;
        answer += temp;
    }
    return answer;
}