const fs = require('fs');
const [n, m] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let result = [];
let sequence = [];

function dfs(start, depth) {
  if (depth === m) {
    result.push(sequence.join(' '));
    return;
  }

  for (let i = start; i <= n; i++) {
    sequence.push(i);
    dfs(i, depth + 1);
    sequence.pop();
  }
}

dfs(1, 0);
console.log(result.join('\n'));