const fs = require('fs');
const [firstLine, ...rest] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, k] = firstLine.split(' ').map(Number);
const coins = rest.map(Number).reverse(); // 가장 비싼 동전부터 확인하기 위해 reverse

let remain  = k;
let count = 0;

for (let coin of coins) {
    if (coin <= remain) {
        count += Math.floor(remain / coin);
        remain %= coin;
    }
}

console.log(count);