const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");
const N = +input[0];
const arr = input[1].split(" ").map(Number);

const unique = [...new Set(arr)]; // 중복 제거
unique.sort((a, b) => a - b);

const map = new Map();
unique.forEach((val, idx) => map.set(val, idx));

const result = arr.map(x => map.get(x));
console.log(result.join(" "));
