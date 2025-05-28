const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const words = input.slice(1);

const freqMap = new Map();

for (let word of words) {
  if (word.length < M) continue;
  freqMap.set(word, (freqMap.get(word) || 0) + 1);
}

const sortedWords = Array.from(freqMap.keys()).sort((a, b) => {
  const freqA = freqMap.get(a);
  const freqB = freqMap.get(b);

  if (freqA !== freqB) return freqB - freqA;               // 자주 나오는 단어 우선
  if (a.length !== b.length) return b.length - a.length;   // 긴 단어 우선
  return a.localeCompare(b);                               // 사전 순
});

console.log(sortedWords.join('\n'));
