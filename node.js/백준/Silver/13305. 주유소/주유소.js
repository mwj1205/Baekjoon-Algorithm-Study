const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const roads = input[1].split(' ').map(Number);
const prices = input[2].split(' ').map(Number);

let minPrice = prices[0];
let totalCost = 0;

for (let i = 0; i < N - 1; i++) {
  if (prices[i] < minPrice) {
    minPrice = prices[i];
  }
  totalCost += minPrice * roads[i];
}

console.log(totalCost);
