function solution(survey, choices) {
    let kkti = {R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0};
    const types = ['RT', 'CF', 'JM', 'AN'];
    for(let i = 0; i < survey.length; i++) {
        const [disagree, agree] = survey[i];
        if(choices[i] < 4) kkti[disagree] += 4 - choices[i];
        else if(choices[i] > 4)  kkti[agree] += choices[i] - 4;
    }
    return types.map(([a, b]) => kkti[b] > kkti[a] ? b : a).join("");
} 