function solution(n) {
    let count = 0;

    for (let m = 1; m * (m - 1) / 2 < n; m++) {
        const remain = n - (m * (m - 1)) / 2;
        if (remain % m === 0) {
            count++;
        }
    }
    return count;
}