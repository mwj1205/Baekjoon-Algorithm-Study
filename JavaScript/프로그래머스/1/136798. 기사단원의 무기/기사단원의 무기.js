function numofDiv(num) {
    let count = 0;
    for(let i = 0; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            count++;
            if(num / i !== i) count++;
        }
    }
    return count;
}

function solution(number, limit, power) {
    var answer = 0;
    let count = 0;
    for(let i = 1; i <= number; i++) {
        count = numofDiv(i);
        if (count > limit)
            answer += power;
        else answer += count;
    }
    return answer;
}