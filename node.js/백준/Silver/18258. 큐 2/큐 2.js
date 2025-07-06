const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const N = Number(input[0]);
const queries = input.slice(1);

const queue = [];
let head = 0;
let tail = 0;

const result = [];

for (let i = 0; i < N; i++) {
  const [query, val] = queries[i].split(' ');

  if (query === 'push') {
    queue[tail++] = val;
  } else if (query === 'pop') {
    result.push(head === tail ? -1 : queue[head++]);
  } else if (query === 'size') {
    result.push(tail - head);
  } else if (query === 'empty') {
    result.push(head === tail ? 1 : 0);
  } else if (query === 'front') {
    result.push(head === tail ? -1 : queue[head]);
  } else if (query === 'back') {
    result.push(head === tail ? -1 : queue[tail - 1]);
  }
}

console.log(result.join('\n'));
