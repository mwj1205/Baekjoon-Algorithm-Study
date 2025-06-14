const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let idx = 0;
const T = +input[idx++];

for (let t = 0; t < T; t++) {
    const [N, M] = input[idx++].split(' ').map(Number);

    idx += M;

    console.log(N - 1);
}
