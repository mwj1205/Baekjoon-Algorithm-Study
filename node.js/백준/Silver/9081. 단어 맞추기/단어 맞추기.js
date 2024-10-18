function nextword(word) {
  let changeidx = -1;
  word = word.split('');
  for (let i = word.length - 2; i >= 0; i--) {
    if (word[i] < word[i + 1]) {
      changeidx = i;
      break;
    }
  }
  if (changeidx === -1) return word.join('');

  for (let i = word.length - 1; i > changeidx; i--) {
    if (word[i] > word[changeidx]) {
      let tempword = word[i];
      word[i] = word[changeidx];
      word[changeidx] = tempword;
      break;
    }
  }

  const left = word.slice(0, changeidx + 1);
  const right = word.slice(changeidx + 1);
  const sortright = right.sort((a, b) => a.localeCompare(b));
  return left.concat(sortright).join('');
}

function solution(input) {
  const N = input[0];
  const words = input.slice(1).map((word) => word.trim());

  for (let i = 0; i < words.length; i++) {
    const answer = nextword(words[i]);
    console.log(answer);
  }
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);