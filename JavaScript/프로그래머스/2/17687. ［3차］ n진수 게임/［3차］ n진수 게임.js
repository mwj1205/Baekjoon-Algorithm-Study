function solution(n, t, m, p) {
    let answer = '';
    let currentNum = 0;
    let gameStr = '';
    
    while (gameStr.length < t * m) {
        gameStr += currentNum.toString(n).toUpperCase();
        currentNum++;
    }
    
    for (let i = 0; i < t; i++) {
        answer += gameStr[(i * m) + p - 1];
    }
    
    return answer;
}