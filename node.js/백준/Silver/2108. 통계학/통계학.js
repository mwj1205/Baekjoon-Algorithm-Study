const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input[0];
const nums = input.slice(1).map(Number);

// 산술평균
const sum = nums.reduce((a, b) => a + b, 0);
let avg = Math.round(sum / N);
if (avg === -0) avg = 0;

// 중앙값
const sorted = [...nums].sort((a, b) => a - b);
const mid = sorted[Math.floor(N / 2)];

// 최빈값
const freqMap = new Map();
for (const num of nums) {
  freqMap.set(num, (freqMap.get(num) || 0) + 1);
}

const freqArr = [...freqMap.entries()].sort((a, b) => {
  if (b[1] === a[1]) return a[0] - b[0]; // 빈도가 같으면 숫자 기준으로 정렬
  return b[1] - a[1]; // 빈도 내림차순
});

// 최빈값이 여러 개면 두번째 값 선택
const mode = freqArr.length > 1 && freqArr[0][1] === freqArr[1][1]
  ? freqArr[1][0]
  : freqArr[0][0];

// 범위
const range = Math.max(...nums) - Math.min(...nums);

console.log(avg);
console.log(mid);
console.log(mode);
console.log(range);