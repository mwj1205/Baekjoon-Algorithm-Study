function solution(sequence, k) {
    const answer = [];
    let left = 0, right = 0;
    let sum = 0, length = 1000000;
    for(right = 0; right < sequence.length; right++) {
        sum += sequence[right];

        while (sum > k) {
            sum -= sequence[left];
            left++;
        }

        if (sum === k && right - left < length) {
            length = right - left;
            answer[0] = left;
            answer[1] = right;
        }
    }
    return answer;
}