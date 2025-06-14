const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();
const N = +input;

const result = [];
let left = 1;
let right = N;

for (let i = 0; i < N; i++) {
  if (i % 2 === 0) {
    result.push(left++);
  } else {
    result.push(right--);
  }
}

console.log(result.join(' '));
