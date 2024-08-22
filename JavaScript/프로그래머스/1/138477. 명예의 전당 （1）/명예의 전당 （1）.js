function solution(k, score) {
    var answer = [];
    let halloffame = [];
    
    for(s of score) {
        if(halloffame.length < k) {
            halloffame.push(s);
            halloffame.sort((a, b) => a - b);
        }
        else if (halloffame[0] < s) {
            halloffame[0] = s;
            halloffame.sort((a, b) => a - b);
        }
        answer.push(halloffame[0]);
    }
    return answer;
}