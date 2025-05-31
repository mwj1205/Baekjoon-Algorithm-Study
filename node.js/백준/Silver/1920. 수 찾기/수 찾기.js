const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input[0];
const A = input[1].split(' ').map(Number).sort((a, b) => a - b);

const M = +input[2];
const targets = input[3].split(' ').map(Number);

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return 1;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return 0;
}

for (const num of targets) {
  console.log(binarySearch(A, num));
}
