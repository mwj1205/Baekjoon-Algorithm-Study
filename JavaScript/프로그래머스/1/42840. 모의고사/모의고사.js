function solution(answers) {
    var answer = [];
    let corrs = [0, 0, 0];
    const guess1 = [1, 2, 3, 4, 5];
    const guess2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const guess3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    for (let i = 0; i < answers.length; i++) {
        if(guess1[i % guess1.length] === answers[i])
            corrs[0]++;
        if(guess2[i % guess2.length] === answers[i])
            corrs[1]++;
        if(guess3[i % guess3.length] === answers[i])
            corrs[2]++;
    }
    let maxcorr = Math.max(...corrs);
    for (let i = 0; i < corrs.length; i++) {
        if(corrs[i] === maxcorr)
            answer.push(i+1);
    }
    return answer;
}