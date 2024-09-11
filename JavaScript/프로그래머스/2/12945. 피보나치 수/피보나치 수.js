function solution(n) {
    let beftwo = 0;
    let befone = 1;
    let now = 0;
    for (let i = 2; i <= n; i++) {
        now = (beftwo + befone) % 1234567;
        beftwo = befone % 1234567;
        befone = now % 1234567;
    }
    return now % 1234567;
}