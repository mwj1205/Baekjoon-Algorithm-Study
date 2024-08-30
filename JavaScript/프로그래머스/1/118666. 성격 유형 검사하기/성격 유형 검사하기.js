function solution(survey, choices) {
    var answer = '';
    let kkti = {R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0};
    for(let i = 0; i < survey.length; i++) {
        if(choices[i] < 4) {
            kkti[survey[i][0]] += 4 - choices[i];
        } 
        else if(choices[i] > 4) {
            kkti[survey[i][1]] += choices[i] - 4;
        }
    }
    if(kkti.R >= kkti.T) answer += 'R';
    else answer += 'T';
    if(kkti.C >= kkti.F) answer += 'C';
    else answer += 'F';
    if(kkti.J >= kkti.M) answer += 'J';
    else answer += 'M';
    if(kkti.A >= kkti.N) answer += 'A';
    else answer += 'N';
    return answer;
}