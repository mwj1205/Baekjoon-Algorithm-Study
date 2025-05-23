const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const modCount = Array(M).fill(0);

let sum = 0;
let answer = 0;

modCount[0] = 1;

for (let i = 0; i < N; i++) {
  sum = (sum + A[i]) % M;
  if (sum < 0) sum += M;

  answer += modCount[sum];
  modCount[sum]++;
}

console.log(answer);