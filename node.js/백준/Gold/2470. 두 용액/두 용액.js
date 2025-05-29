const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input[0];
const arr = input[1].split(' ').map(Number);

arr.sort((a, b) => a - b);

let left = 0;
let right = N - 1;
let minSum = Infinity;
let answer = [];

while (left < right) {
  const sum = arr[left] + arr[right];

  if (Math.abs(sum) < minSum) {
    minSum = Math.abs(sum);
    answer = [arr[left], arr[right]];
  }

  if (sum < 0) {
    left++;
  } else {
    right--;
  }
}

console.log(answer[0], answer[1]);
