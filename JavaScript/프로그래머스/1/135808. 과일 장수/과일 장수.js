function solution(k, m, score) {
    var answer = 0;
    if (score.length < m) return 0;
    let sortscore = score.sort((a, b) => a - b).slice(score.length % m);
    for(let i = 0; i < sortscore.length; i += m) {
        answer += sortscore[i] * m;
    }
    return answer;
}