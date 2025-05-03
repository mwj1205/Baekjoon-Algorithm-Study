function solution(triangle) {
    for (let i = 1; i < triangle.length; i++) {
        for (let j = 0; j <= i; j++) {
            if (j === 0) { // 왼쪽 끝
                triangle[i][j] += triangle[i - 1][j];
            } else if (j === i) { // 오른쪽 끝
                triangle[i][j] += triangle[i - 1][j - 1];
            } else {
                triangle[i][j] += Math.max(triangle[i - 1][j - 1], triangle[i - 1][j]);
            }
        }
    }
    let max = 0;
    for (let num of triangle[triangle.length - 1]) {
        if (num > max) max = num;
    }
    return max;
}