const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const S = input[0];
const Q = +input[1];
const queries = input.slice(2).map(line => {
    const [ch, l, r] = line.split(' ');
    return [ch, +l, +r];
});

// 26개 알파벳 각각에 대해 누적합 배열 생성
const n = S.length;
const prefix = Array.from({ length: 26 }, () => Array(n).fill(0));

for (let i = 0; i < n; i++) {
    const chIdx = S.charCodeAt(i) - 97;
    for (let j = 0; j < 26; j++) {
        prefix[j][i] = (i > 0 ? prefix[j][i - 1] : 0);
    }
    prefix[chIdx][i]++;
}

let output = '';
for (const [ch, l, r] of queries) {
    const chIdx = ch.charCodeAt(0) - 97;
    const left = l > 0 ? prefix[chIdx][l - 1] : 0;
    const right = prefix[chIdx][r];
    output += (right - left) + '\n';
}

console.log(output.trim());
