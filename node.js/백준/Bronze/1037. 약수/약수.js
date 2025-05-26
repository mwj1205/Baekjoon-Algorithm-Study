const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const divisors = input[1].split(' ').map(Number);

const min = Math.min(...divisors);
const max = Math.max(...divisors);

console.log(min * max);