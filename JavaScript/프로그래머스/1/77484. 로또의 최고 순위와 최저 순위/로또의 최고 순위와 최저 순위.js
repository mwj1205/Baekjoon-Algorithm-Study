function solution(lottos, win_nums) {
    let answer = [];
    lottos.sort((a, b)=>(a - b));
    win_nums.sort((a, b)=>(a - b));
    let zeroCount = 0;
    for(let i = 0; i < win_nums.length; i++) { if(lottos[i] === 0) zeroCount++; }
    let i = zeroCount;
    let j = 0, count = 0;
    while(i < lottos.length && j < win_nums.length) {
        if(lottos[i] === win_nums[j]) {
            count++;
            i++;
            j++;
        } else if (lottos[i] < win_nums[j]) {
            i++;
        } else {
            j++;
        }
    }
    console.log(count, zeroCount);
    answer.push(7 - count - zeroCount < 6 ? 7 - count - zeroCount : 6);
    answer.push(7 - count < 6 ? 7 - count : 6);
    return answer;
}