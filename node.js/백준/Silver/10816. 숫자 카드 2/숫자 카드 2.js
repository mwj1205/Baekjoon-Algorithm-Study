const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const N = Number(input[0]);
const sangCards = input[1].split(' ').map(Number);
const M = Number(input[2]);
const queries = input[3].split(' ').map(Number);

const counter = new Map();
for (const num of sangCards) {
    counter.set(num, (counter.get(num) || 0) + 1);
}

const result = queries.map(q => counter.get(q) || 0);
console.log(result.join(' '));
