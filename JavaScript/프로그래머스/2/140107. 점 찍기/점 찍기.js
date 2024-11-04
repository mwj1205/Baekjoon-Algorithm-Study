function solution(k, d) {
    let answer = 0;
    // d^2 >= x^2 + y^2
    for(let i = 0; i <= d; i += k) {
        let dots = Math.floor(Math.sqrt(d**2 - i**2) / k) + 1;
        answer += dots;
    }
    return answer;
}