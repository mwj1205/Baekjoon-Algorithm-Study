function solution(n, m, section) {
    var answer = 0;
    let paintcomplete = 0;
    for(let i = 0; i < section.length; i++) {
        if (section[i] > paintcomplete) {
            answer++;
            paintcomplete = section[i] + m - 1;
        }
    }
    return answer;
}