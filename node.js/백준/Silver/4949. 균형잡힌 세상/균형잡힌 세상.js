const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function isPair(str) {
  const stack = [];
  const brPair = { ')': '(', ']': '[' };

  for (const char of str) {
    if (char === '(' || char === '[') {
      stack.push(char);
    } else if (char === ')' || char === ']') {
      if (stack.length === 0 || stack[stack.length - 1] !== brPair[char]) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}

for (let string of input) {
  if (string === '.') break;
  console.log(isPair(string) ? 'yes' : 'no');
}
