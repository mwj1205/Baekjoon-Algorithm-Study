const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const roads = input[1].split(' ').map(BigInt);
const prices = input[2].split(' ').map(BigInt);

let totalCost = 0n;
let minPrice = prices[0];

for (let i = 0; i < N - 1; i++) {
  if (prices[i] < minPrice) {
    minPrice = prices[i];
  }
  totalCost += minPrice * roads[i];
}

console.log(totalCost.toString());
