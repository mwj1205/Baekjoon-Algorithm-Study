const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

let maxSum = arr[0]; // 전체 최대값
let currentSum = arr[0]; // 현재 위치까지의 최대 연속 합

for (let i = 1; i < n; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
}

console.log(maxSum);
