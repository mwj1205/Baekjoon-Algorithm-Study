function solution(brown, yellow) {
    var answer = [];
    const total = brown + yellow;
    for (let y = 3 ; y <= Math.sqrt(total); y++) {
        if (total % y !== 0) continue;
        const x = total / y;

        if ((x - 2) * (y - 2) === yellow) {
            return [x, y];
        }
    }
}
