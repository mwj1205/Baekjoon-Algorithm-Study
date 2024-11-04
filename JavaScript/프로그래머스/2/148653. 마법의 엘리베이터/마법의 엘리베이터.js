function solution(storey) {
    let answer = 0;
    while (storey > 0) {
        const num = storey % 10;
        if (num > 5) {
            answer += (10 - num);
            storey += 10;
        } else if (num < 5) {
            answer += num;
        } else {
            answer += 5;
            if (Math.floor(storey / 10) % 10 >= 5) {
                storey += 10;
            }
        }
        
        storey = Math.floor(storey / 10);
    }
    return answer;
}