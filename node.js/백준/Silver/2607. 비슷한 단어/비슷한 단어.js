function solution(words) {
  let answer = 0;

  function alphacount(word) {
    const alphacount = new Array(26).fill(0);
    for (let i = 0; i < word.length; i++) {
      alphacount[word.charCodeAt(i) - 'A'.charCodeAt()]++;
    }
    return alphacount;
  }

  const refword = words[1];
  const refcount = alphacount(refword);

  for (let i = 2; i < words.length; i++) {
    const wordcount = alphacount(words[i]);
    let added = 0;
    let removed = 0;

    for (let j = 0; j < 26; j++) {
      const diff = refcount[j] - wordcount[j];
      if (diff > 0) {
        removed += diff;
      } else if (diff < 0) {
        added += -diff;
      }
    }

    if (added <= 1 && removed <= 1 && added + removed <= 2) {
      answer++;
    }
  }

  return answer;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(solution(input));