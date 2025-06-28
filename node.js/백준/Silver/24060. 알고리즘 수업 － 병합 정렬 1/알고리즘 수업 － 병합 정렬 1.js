const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");
const [N, K] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);

let count = 0;
let answer = -1;
const tmp = new Array(N);

function merge(A, p, q, r) {
    let i = p, j = q + 1, t = 0;
    while (i <= q && j <= r) {
        if (A[i] <= A[j]) {
            tmp[t++] = A[i++];
        } else {
            tmp[t++] = A[j++];
        }
    }
    while (i <= q) tmp[t++] = A[i++]; // 왼쪽 배열 부분이 남은 경우
    while (j <= r) tmp[t++] = A[j++]; // 오른쪽 배열 부분이 남은 경우
    i = p;
    t = 0;
    while (i <= r) {
        A[i++] = tmp[t++];
        count++;
        if (count === K) {
            answer = A[i - 1];
        }
    }
}

function mergeSort(A, p, r) {
    if (p < r) {
        const q = Math.floor((p + r) / 2);
        mergeSort(A, p, q);
        mergeSort(A, q + 1, r);
        merge(A, p, q, r);
    }
}

mergeSort(A, 0, N - 1);
console.log(answer);