function solution(s) {
    var answer = 0;
    let othernum = 0;
    let samenum = 0;
    let nowletter =  '';
    for(const c of s) {
        if(othernum === samenum) {
            samenum = 0;
            othernum = 0;
            nowletter = c;
            answer++;
        }
        if(c === nowletter)
            samenum++;
        else othernum++;
    }
    return answer;
}