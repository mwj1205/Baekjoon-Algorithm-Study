const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const trees = input[1].split(' ').map(Number);

// 잘린 나무의 총 길이를 계산하는 함수
function getCutWood(height) {
    let totalWood = 0;
    for (let i = 0; i < N; i++) {
        if (trees[i] > height) {
            totalWood += trees[i] - height;
        }
    }
    return totalWood;
}

let left = 0;
let right = Math.max(...trees);
let answer = 0;

// 이분탐색
while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const cutWood = getCutWood(mid);
    
    if (cutWood >= M) {
        answer = mid;
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}

console.log(answer);