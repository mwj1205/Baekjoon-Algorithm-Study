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
  switch (query) {
    case '1':
      queue[--head] = Number(val);
      break;
    case '2':
      queue[tail++] = Number(val);
      break;
    case '3':
      result.push(head < tail ? queue[head++] : -1);
      break;
    case '4':
      result.push(head < tail ? queue[--tail] : -1);
      break;
    case '5':
      result.push(tail - head);
      break;
    case '6':
      result.push(head === tail ? 1 : 0);
      break;
    case '7':
      result.push(head < tail ? queue[head] : -1);
      break;
    case '8':
      result.push(head < tail ? queue[tail - 1] : -1);
      break;
  }
}

console.log(result.join('\n'));
