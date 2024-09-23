function solution(progresses, speeds) {
    const answer = [];
    const days = progresses.map((progress, index) => {
        return Math.ceil((100 - progress) / speeds[index]);
    });
    
    let maxDay = days[0];
    let count = 1;

    for (let i = 1; i < days.length; i++) {
        if (maxDay < days[i]) {
            answer.push(count);
            count = 1;
            maxDay = days[i];
        } else {
            count++;
        }
    }
    answer.push(count);
    
    return answer;
}
